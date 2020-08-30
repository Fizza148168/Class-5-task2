import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import valueContext1 from './ValueContext';

function App() {
  let value = useState(45);
  //All the child components of the div below provider can use the value
  //context is kind of global varibale 
  //provider reinitialize tyhe value
  //transfering values to component using context by calling context instead of passing value'
  return (
    <valueContext1.Provider value={value}>
    <div>
      Hello World
      <Parent></Parent>
    </div>
    </valueContext1.Provider>
  );
}

export default App;