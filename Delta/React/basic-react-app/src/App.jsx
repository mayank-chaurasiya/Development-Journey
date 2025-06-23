import "./App.css";
import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";
import Form from "./components/Form.jsx";
import LikeButton from "./components/LikeButton.jsx";
import Counter from "./components/Counter.jsx";
function App() {
  return (
    <>
      <h2>Blockbuster Deals | Show Now</h2>
      <ProductTab />
      <Button />

      <Form />

      <br />
      <LikeButton />
      <br />
      <Counter />
    </>
  );
}

export default App;
