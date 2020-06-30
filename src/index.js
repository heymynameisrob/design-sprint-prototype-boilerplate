import React from 'react';
import ReactDOM from 'react-dom';
import AppProviders from './context';
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
);
