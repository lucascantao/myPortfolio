import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SessionProvider from './context/SessionContext';

ReactDOM.render(

  <SessionProvider>
    <App />
  </SessionProvider>

  , document.getElementById('root')
);

