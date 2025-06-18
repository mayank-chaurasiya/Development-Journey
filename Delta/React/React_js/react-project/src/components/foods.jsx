const Item = ({ foodItems, buttonClicked }) => {
  return (
    <>
      <li className="list-group-item mb-2">
        <span>{foodItems}</span>
        <button className="buy-button btn btn-primary" onClick={buttonClicked}>
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
