import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState();

  function dateHandler(event) {
    if (event.target.value) {
      setDate(event.target.value);
    }
  }

  function onNumberHandler(event) {
    if (event.target.value) {
      setNumber(event.target.value);
    }
  }

  function clickHandler() {
    if (number > 0 && date) {
      const myArr = date.split("-").reduce((p, n) => {
        return parseInt(p) + parseInt(n);
      });
      if (myArr % number === 0) {
        setResult(<h2>Your Birthday is Lucky 😎!!!</h2>);
      } else {
        setResult(<h2>Your birthdate is not so lucky 🥺</h2>);
      }
    } else {
      setResult(<p>Use valid data</p>);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>Lucky Birthday? 🤔</h1>
          <h3>Enter your birthdate and lucky number to check 😉</h3>
        </div>
        <h4>Birthday</h4>
        <input
          onChange={dateHandler}
          className="date-input"
          type="date"
          min="1950-01-01"
          max="2019-01-01"
        />
        <h4>Lucky number</h4>
        <input
          onChange={onNumberHandler}
          className="input-lucky"
          placeholder="enter a number"
        />
        <div>
          <button className="button" onClick={clickHandler}>
            Calculate
          </button>
        </div>
        <div className="result">{result}</div>
      </div>
    </div>
  );
}
