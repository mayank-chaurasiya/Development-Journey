import "./App.css";
import CalcScreen from "./Components/CalcScreen";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";
function App() {
  let { calcValue, setCalcValue } = useState("76");

  const handleButtonClick = (value) => {
    setCalcValue((prev) => prev + value);
  };

  return (
    <>
      <div id="calc-boundary">
        <CalcScreen calcValue={calcValue} />
        <ButtonsContainer onButtonClick={handleButtonClick} />
      </div>
    </>
  );
}

export default App;
