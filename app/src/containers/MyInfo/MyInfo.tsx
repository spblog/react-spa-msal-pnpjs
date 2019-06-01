import { User } from '@microsoft/microsoft-graph-types';
import { graph } from '@pnp/graph';
import * as React from 'react';

import * as styles from './MyInfo.css';

interface IState {
  user: User;
}

export class MyInfo extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: null
    };
  }
  public componentDidMount(): void {
    graph.me.get<User>().then(user => {
      this.setState({
        user
      });
    });
  }

  public render(): JSX.Element {
    if (!this.state.user) {
      return <div>Loading...</div>;
    }

    return (
      <div className={styles.myInfo}>
        <h3>{this.state.user.displayName}</h3>
        <div>
          <span>
            <b>Role: </b>
          </span>
          {this.state.user.jobTitle}
        </div>
        <div>
          <span>
            <b>Email: </b>
          </span>
          {this.state.user.mail}
        </div>
        <div>
          <span>
            <b>Mobile: </b>
          </span>
          {this.state.user.mobilePhone}
        </div>
      </div>
    );
  }
}
