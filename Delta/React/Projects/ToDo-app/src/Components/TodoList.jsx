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
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let lowerCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toLowerCase(),
          };
        } else {
          return todo;
        }
      })
    );
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
              <button
                className="lowercase-btn"
                onClick={() => {
                  lowerCaseOne(todo.id);
                }}
              >
                LowerCase
              </button>
            </li>
          ))}
        </ul>
        <br />
        <button className="uppercase-btn" onClick={upperCaseAll}>
          UpperCase All
        </button>
      </div>
    </center>
  );
}
