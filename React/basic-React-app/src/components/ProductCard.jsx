import Product from "./Product";
import "./ProductCard.css";
function ProductCard() {
  return (
    <div className="card">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default ProductCard;
