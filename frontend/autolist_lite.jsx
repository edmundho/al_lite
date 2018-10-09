import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  
  ReactDOM.render(<App store={store} />, rootEl);
});