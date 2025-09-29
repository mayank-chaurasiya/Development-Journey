import "./Product.css";

function Product(props) {
  console.log(props.title);
  return <div className="Product">
    <p>Product</p>
  </div>;
}

export default Product;
