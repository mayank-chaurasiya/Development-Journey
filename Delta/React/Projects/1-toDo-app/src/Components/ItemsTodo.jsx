import TodoItems from "./TodoItem";

const ItemsTodo = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItems todoName={item.name} todoDate={item.date} />
        ))}
      </div>
    </>
  );
};

export default ItemsTodo;
