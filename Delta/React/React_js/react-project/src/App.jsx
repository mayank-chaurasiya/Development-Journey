import "./App.css";
import ListItems from "./components/listitems";
import ErrorMsg from "./components/ErrorMessag";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Fish", "Lentils", "curd", "Egg", "Roti/Rice"];
  // let foodItems = [];

  let newlyAddedItems = "newly added";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    newlyAddedItems = event.target.value;
  };
  return (
    <>
      <Container>
        <h1 className="heading">Healthy Foods</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{newlyAddedItems}</p>
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
