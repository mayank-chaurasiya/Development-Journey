import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["12,879", "19,000", "1,00,000", "5,999"];
  let newPrices = ["19,000", "12,879", "90,000", "3,999"];
  let description = [
    "silent clicks",
    "designed for Ipad Pro",
    "8k Display",
    "3000 DPI",
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
