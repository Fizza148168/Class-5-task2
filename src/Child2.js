import React, { useReducer } from 'react';
import './App.css';
import valueContext from './ValueContext';
import numReducer from './numberReducer';

//to dicuss useReducers for multiple actions for state
//use state is for single functionality/component{individual}
//useReducer is for multiple functionality of state{multiple components}{multiple values}{multiple actiosns}{state of whole application]]}
function Child2(props) {
    let [state,dispatch]=useReducer(numReducer,52);
  return (
    <div>
      Hello From Child 2 {state}
      <button onClick={()=>{dispatch({type:"INCREMENT",val:67})}}>increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT",val:34})}}>decrement</button>
    </div>
  );
}

export default Child2;