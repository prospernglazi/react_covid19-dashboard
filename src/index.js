import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyles } from './styles/Global';
import ErrorBoundary from './services/ErrorBoundary';

import App from './App';

const rootNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </React.StrictMode>,
  rootNode,
);

// serviceWorker.register();
