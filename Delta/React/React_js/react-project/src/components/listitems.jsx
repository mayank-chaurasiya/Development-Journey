import { useState } from "react";
import Item from "./foods";
const ListItems = ({ foods, buttonClicked }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <>
      <ul className="list-group">
        {foods.map((item) => (
          <Item
            key={item}
            foodItems={item}
            bought={activeItems.includes(item)}
            buttonClicked={(event) => onBuyButton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default ListItems;
