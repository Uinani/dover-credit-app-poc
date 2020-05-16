import React from 'react';
import Provider from "react-redux";

import store from "./redux/store";
import CreditApplication from './views/credit-application.view';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreditApplication/>
      </div>
    </Provider>
  );
}

export default App;
