import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";
import "./Styles/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <Count count={count} />
      <p className="feedback">{feedback}</p>
      <Button onClick={handleIncrement} text="Add 1!" />
    </div>
  );
};

export default Counter;
