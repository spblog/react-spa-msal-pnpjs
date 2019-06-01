import * as React from 'react';

import { msalInstance } from '../../hoc/Auth';
import * as styles from './Header.css';

export const Header: React.StatelessComponent<{}> = () => {
  const user = msalInstance.getAccount().name;

  return (
    <div className={styles.header}>
      Hello, <i>{user}</i>!
    </div>
  );
};
