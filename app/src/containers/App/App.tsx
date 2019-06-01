import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import { MainScreen } from '../../components/MainScreen/MainScreen';
import { withAuth } from '../../hoc/Auth';

initializeIcons();

const RootApp: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
      </Switch>
    </div>
  );
};

export const App = hot(module)(withAuth(RootApp));
