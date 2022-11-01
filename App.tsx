import * as React from 'react';
import { useState } from "react";
import './style.css';

export default function App() {

// for inputs typed
const [calc, setCalc] = useState("");
//for outputs displayed
const [result, setResult] = useState("");

const operations = ["/", "*", "+", "-", "."];

//add to the list displayed
const updateCalc = (value) => {
  if (
    (operations.includes(value) && calc === "") ||
    (operations.includes(value) && operations.includes(calc.slice(-1)))
  ) {
    return;
  }

  setCalc(calc + value);

if(!operations.includes(value))
{
  setResult(eval(calc + value).toString())
}
};

const equalsSign=()=>{
setCalc(eval(calc).toString());
}

const deleteButton =()=>{
if (calc == ''){
  return;
}
const value = calc.slice(0,-1);
setCalc(value);
} 

const clearButton=()=>{
setCalc('');
setResult('');
}


const createNumbers = () => {
  const digits = [];
  for (let i = 1; i < 10; i++) {
    digits.push(
      <button onClick={() => updateCalc(i.toString())} key={i}>
        {i}
      </button>
    );
  }
  return digits;
};


  return (
    <div className="Calc-App">
    <h3>A REACT Calculator with simple functionalities</h3>
    <div className="calculator">
      <div className="display">
        {result ? <span>{result}</span> : ""}&nbsp; {calc || "0"}
      </div>
      <div className="operators">
        <button onClick={() => updateCalc("/")}>/</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={deleteButton}> DEL</button>
        <button onClick={clearButton}> CE</button>
      </div>
      <div className="numbers">
        {createNumbers()}
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={equalsSign}>=</button>
      </div>
    </div>
  </div>
);
}
