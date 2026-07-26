import React, { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div>
      <h2>{counter}</h2>

      <button onClick={increment}>Increment</button>
      <br />

      <button onClick={decrement}>Decrement</button>
      <br />

      <button onClick={() => sayWelcome("welcome")}>
        Say Welcome
      </button>
      <br />

      <button onClick={handleClick}>
        Click on me
      </button>

      <CurrencyConverter />
    </div>
  );
}

export default App;