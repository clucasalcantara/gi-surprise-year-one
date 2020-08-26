import React from 'react';
import ReactDOM from 'react-dom';
// UI Elements
import { App } from './App';
// Worker
import * as serviceWorker from './pwa/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();