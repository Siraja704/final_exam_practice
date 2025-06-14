import React, { useReducer } from "react";
import "./Counter_r.css"; // Assuming you have a CSS file for styling
let intailstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};

function CounterR() {
  const [count, dispatch] = useReducer(reducer, intailstate);

  return (
    <div>
      <h1>Counter Component</h1>

      <h2>Count: {count}</h2>
      <button onClick={() => dispatch("inc")}> Increament</button>
      <button onClick={() => dispatch("dec")}>Decreament</button>
    </div>
  );
}

export default CounterR;
