import { AppName } from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import ItemsTodo from "./Components/ItemsTodo";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Khushi",
      date: "17/09/2004",
    },
    {
      name: "Mayank",
      date: "09/09/2003",
    },
    {
      name: "React",
      date: "09/09/20078",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <ItemsTodo todoItems={todoItems} />
    </center>
  );
}

export default App;
