import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  console.log("component is rendered");
  console.log(`count = ${count}`);

  let incCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
