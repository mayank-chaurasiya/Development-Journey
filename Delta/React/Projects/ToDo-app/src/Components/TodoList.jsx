import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["Sample task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
  };

  let updateTaskVal = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <center>
      <h1>To Do App</h1>
      <div className="container">
        <input
          type="text"
          placeholder="add a task"
          onChange={updateTaskVal}
          value={newTodo}
        />
        <button className="add-button" onClick={addNewTask}>
          Add Task
        </button>
        <br />
        <br />
        <hr />
        <h4>Tasks Todo</h4>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </center>
  );
}
