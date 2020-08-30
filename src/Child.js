import React, { useContext } from 'react';
import './App.css';
import valueContext from './ValueContext';

function Child(props) {
    let value =useContext(valueContext);
  return (
    <div>
      Hello From Child {value}
      <button onClick={()=>{value[1](++value[0])}}>Update Value</button>
    </div>
  );
}

export default Child;