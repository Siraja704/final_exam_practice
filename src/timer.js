import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
      <button onClick={() => setStart(true)} disabled={start}>
        Start
      </button>
      <button onClick={() => setStart(false)} disabled={!start}>
        Pause
      </button>
      <button onClick={() => setSeconds(0)}> Reset</button>
    </div>
  );
}

export default Timer;
