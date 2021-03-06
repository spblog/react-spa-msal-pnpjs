import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// AppContainer is a necessary wrapper component for HMR
// import { AppContainer } from 'react-hot-loader'

/*
  Main App CSS
    - Used for introduce CSS in webpack workflow
    - In webpack Dev it will be injected as /**
    - In webpack prod it will be extracted as a separate bundled file
 */
import './../stylesheets/main.css';

/*
  Main App Container
 */
import { App } from './containers/App/App';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(app, document.getElementById('reactContainer'));
