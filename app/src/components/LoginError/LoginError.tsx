import * as React from 'react';

interface IProps {
  message: string;
}

export const LoginError: React.StatelessComponent<IProps> = props => (
  <div>
    <pre>
      <code>{props.message}</code>
    </pre>
  </div>
);
