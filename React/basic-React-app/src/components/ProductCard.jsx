import Product from "./Product";
import "./ProductCard.css";
function ProductCard() {
  return (
    <div className="card">
      <Product title="Logitect mx Master" idx={0} />
      <Product title="Apple Pencil" idx={1} />
      <Product title="Samsung Laptop" idx={2} />
      <Product title="Zebronics mouse M13" idx={3} />
    </div>
  );
}

export default ProductCard;
