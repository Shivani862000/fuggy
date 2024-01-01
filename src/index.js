import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContenxt from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={appStore}>
  <UserContenxt.Provider value={{loggedInUser:"shivani"}}>
  <App />
  </UserContenxt.Provider>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
