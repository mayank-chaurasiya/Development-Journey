import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let incCountx = () => {
    setCountx((currCount) => currCount + 1);
  };

  let incCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(
    function print() {
      console.log("this is a side-effect");
    },
    []
  );

  return (
    <>
      <div>
        <h3>count x = {countx}</h3>
        <button onClick={incCountx}>+1</button>
        <h3>count y= {county}</h3>
        <button onClick={incCounty}>+1</button>
      </div>
    </>
  );
}
