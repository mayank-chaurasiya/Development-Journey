import "./product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,990", "1,599", "988"];
  let newPrices = ["8,999", "9,199", "899", "699"];
  let descriptions = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "intuitive surface"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{descriptions[idx][0]}</p>
      <p>{descriptions[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
