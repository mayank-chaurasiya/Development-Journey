const Item = ({ foodItems, bought, buttonClicked }) => {
  return (
    <>
      <li className={`list-group-item mb-2 ${bought && "active"}`}>
        <span>{foodItems}</span>
        <button className="buy-button btn btn-info" onClick={buttonClicked}>
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
