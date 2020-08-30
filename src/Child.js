import React from 'react';
import './App.css';

function Child(props) {
  return (
    <div>
      Hello From Child
      number is {props.num}
    </div>
  );
}

export default Child;