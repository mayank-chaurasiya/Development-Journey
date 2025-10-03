import "./App.css";
import ProductCard from "./components/ProductCard";
import Button from "./components/Button";
import Likebutton from "./components/LikeButton";
function App() {
  return (
    <>
      <h2>BlockBuster Deals | Shop NOW!!</h2>
      <ProductCard />
      {/* <Button /> */}
      <Likebutton />
    </>
  );
}

export default App;
