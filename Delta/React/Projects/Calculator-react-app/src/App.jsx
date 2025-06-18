import "./App.css";
import CalcScreen from "./Components/CalcScreen";
import ButtonsContainer from "./Components/ButtonsContainer";
function App() {
  return (
    <>
      <div id="calc-boundary">
        <CalcScreen />
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
