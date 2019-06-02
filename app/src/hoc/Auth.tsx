import { graph } from '@pnp/graph';
import { sp } from '@pnp/sp';
import * as React from 'react';

import { msalConfig } from '../msal/msalConfig';
import { LoginError } from '../components/LoginError/LoginError';
import { LoginInProgress } from '../components/LoginInProgress/LoginInProgress';
import { PnPFetchClient } from '../pnp/PnPFetchClient';
import { UserAgentApplication, AuthError } from 'msal';

//export const authContext: AuthenticationContext = new AuthenticationContext(msalConfig);

export const msalInstance = new UserAgentApplication({
  auth: msalConfig
});

interface IState {
  authenticated: boolean;
  renewIframe: boolean;
  errorMessage: string;
  hasError: boolean;
}

export function withAuth<TOriginalProps>(
  WrappedComponent: React.ComponentClass<TOriginalProps> | React.StatelessComponent<TOriginalProps>
): React.ComponentClass<TOriginalProps> {
  return class Auth extends React.Component<TOriginalProps, IState> {
    constructor(props: TOriginalProps) {
      super(props);

      this.state = {
        authenticated: false,
        renewIframe: false,
        hasError: false,
        errorMessage: null
      };
    }

    public componentWillMount(): void {

      // action to perform on authentication
      msalInstance.handleRedirectCallback(() => { // on success
        this.setState({
          authenticated: true
        });

        this.initPnPjs();
      }, (authErr: AuthError, accountState: string) => {  // on fail
        console.log(authErr);

        this.setState({
          hasError: true,
          errorMessage: authErr.errorMessage
        });
      });

      // if we are inside renewal callback (hash contains access token), do nothing
      if (msalInstance.isCallback(window.location.hash)) {
        this.setState({
          renewIframe: true
        });
        return;
      }

      // not logged in, perform full page redirect
      if (!msalInstance.getAccount()) {
        msalInstance.loginRedirect({});
        return;
      } else {     // logged in, set authenticated state and init pnpjs library
        this.setState({
          authenticated: true
        });
        this.initPnPjs();
      }
    }

    public render(): JSX.Element {
      if (this.state.renewIframe) {
        return <div>hidden renew iframe - not visible</div>;
      }

      if (this.state.authenticated) {
        return <WrappedComponent {...this.props} />;
      }

      if (this.state.hasError) {
        return <LoginError message={this.state.errorMessage} />;
      }

      return <LoginInProgress />;
    }

    private initPnPjs(): void {
      const fetchClientFactory = () => {
        return new PnPFetchClient(msalInstance);
      };

      sp.setup({
        sp: {
          fetchClientFactory,
          baseUrl: process.env.SP_SITE_URL
        }
      });

      graph.setup({
        graph: {
          fetchClientFactory
        }
      });
    }
  };
}
