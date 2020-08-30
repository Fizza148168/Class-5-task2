import React, { useContext } from 'react';
import './App.css';
import valueContext from './ValueContext';

function Child(props) {
    let value =useContext(valueContext);
  return (
    <div>
      Hello From Child {value}
    </div>
  );
}

export default Child;