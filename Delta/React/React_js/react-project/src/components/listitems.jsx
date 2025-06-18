import Item from "./foods";
const ListItems = ({ foods, buttonClicked }) => {
  return (
    <>
      <ul className="list-group">
        {foods.map((item) => (
          <Item
            key={item}
            foodItems={item}
            buttonClicked={() => console.log(`${item} to be bought`)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default ListItems;
