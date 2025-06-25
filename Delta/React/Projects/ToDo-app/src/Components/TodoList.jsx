import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTaskVal = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    let copy = todos.filter((todo) => todo.id != id);
    console.log(copy);
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
        <hr />
        <h6>Tasks List :-</h6>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp;&nbsp;
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </center>
  );
}
