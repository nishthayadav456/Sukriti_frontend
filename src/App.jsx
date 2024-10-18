import React from 'react';
import './App.css'
import { Router } from './Routing/Router.jsx';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
export const App=()=> {
 

  return (
    <>
  <Provider store={Store}>
      <Router />
    </Provider>
    </>
  )
}

