import React from 'react';
import './App.css';
import Child from './Child'

function Parent(props) {
  return (
    <div>
      Hello from Parent
      <Child></Child>
    </div>
  );
}

export default Parent;