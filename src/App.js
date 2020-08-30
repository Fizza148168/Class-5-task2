import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import valueContext from './ValueContext';

function App() {
  //let [number,setNumber] = useState(45);
  //All the child components of the div below provider can use the value
  //context is kind of global varibale 
  //provider reinitialize tyhe value
  //transfering values to component using context by calling context instead of passing value'
  return (
    <valueContext.Provider value={78}>
    <div>
      Hello World
      <Parent></Parent>
    </div>
    </valueContext.Provider>
  );
}

export default App;