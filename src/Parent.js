import React from 'react';
import './App.css';
import Child from './Child'
import Child2 from './Child2'

function Parent(props) {
  return (
    <div>
      Hello from Parent
      <Child></Child>
      <Child2></Child2>
    </div>
  );
}

export default Parent;