import Product from "./Product";
import "./ProductCard.css"
function ProductCard() {
  return (
    <div className="card">
      <Product title="Phone"/>
      <Product title="Laptop"/>
      <Product title="Pen"/>
    </div>
  );
}

export default ProductCard;
