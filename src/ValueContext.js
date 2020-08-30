import React from 'react';


//context has two things
//1. provider 2. consumer
//const valueContext= React.createContext(45);

//default function if without provider
const valueContext1= React.createContext(45, ()=>{});
//export default valueContext; 
export default valueContext1;