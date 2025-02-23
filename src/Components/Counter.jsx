import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <p>Counter: {counter}</p>

      <button onClick={incrementCounter}>+</button>

      <button onClick={decrementCounter}>-</button>
    </div>
  );
}

export default Counter;
