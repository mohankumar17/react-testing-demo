import React, { useState } from "react";
import "./Sum.css";

function Sum() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  return (
    <div>
      <h3 data-testid="heading">Count</h3>
      <br></br>
      <h1
        className={`${count >= 50 ? "green" : count <= -50 ? "red" : ""}`}
        data-testid="counter"
      >
        {count}
      </h1>
      <br></br>
      <h4>Step - {step}</h4>
      <br></br>
      <hr></hr>
      <button data-testid="decrBtn" type="submit" onClick={handleDecrement}>
        Decrement
      </button>
      <button data-testid="incrBtn" type="submit" onClick={handleIncrement}>
        Increment
      </button>
      <br></br>
      <br></br>
      <input
        type="number"
        value={step}
        data-testid="stepInput"
        onChange={(e) => setStep(parseInt(e.target.value))}
      />
    </div>
  );
}

export default Sum;
