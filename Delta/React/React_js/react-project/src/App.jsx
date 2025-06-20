import "./App.css";
import ListItems from "./components/listitems";
import ErrorMsg from "./components/ErrorMessag";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMsg foods={foodItems} />
        <ListItems foods={foodItems} />
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
