import { User } from '@microsoft/microsoft-graph-types';
import { sp } from '@pnp/sp';
import * as React from 'react';

import * as styles from './SpInfo.css';

interface IWebInfo {
  url: string;
  title: string;
  id: string;
}

interface IState {
  web: IWebInfo;
}

export class SpInfo extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      web: null
    };
  }
  public componentDidMount(): void {
    sp.web.get().then(web => {
      const webInfo: IWebInfo = {
        id: web.Id,
        title: web.Title,
        url: web.Url
      };

      this.setState({
        web: webInfo
      });
    });
  }

  public render(): JSX.Element {
    if (!this.state.web) {
      return <div>Loading...</div>;
    }

    return (
      <div className={styles.spInfo}>
        <h3>{this.state.web.title}</h3>
        <div>
          <span>
            <b>Site Url: </b>
          </span>
          {this.state.web.url}
        </div>
        <div>
          <span>
            <b>Id: </b>
          </span>
          {this.state.web.id}
        </div>
      </div>
    );
  }
}
