import React, { use, useEffect } from "react";
import { useState } from "react";
import Timer from "../timer";

function Counter() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("Click the Button");

  function handleClick() {
    setCount(count + 2);
    setText("Button Clicked increament by 2, count is now: ");
    console.log("Button clicked, count is now: " + (count + 2));
  }

  useEffect(() => {
    alert("Count has been updated to: " + count);
  }, [count]);

  return (
    <div>
      <Timer />
      <p>
        {text} {count}
      </p>

      <button
        id="btn"
        onClick={() => {
          setCount(count + 1);
          setText("Button Clicked increament by 1, count is now: ");
          console.log("Button clicked, count is now: " + (count + 1));
        }}
      >
        CLick me{" increament by 1"}
      </button>

      <button type="button" onClick={handleClick}>
        {" "}
        increament by 2{" "}
      </button>
    </div>
  );
}

export default Counter;
