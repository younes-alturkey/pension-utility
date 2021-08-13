import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import 'w3-css/w3.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
