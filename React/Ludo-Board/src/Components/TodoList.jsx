import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addTask = () => {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodo) => {
      return todos.filter((prevTodo) => prevTodo.id != id);
    });
  };

  const markAsDone = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <>
      <h4>Todo App</h4>
      <br />
      <input
        type="text"
        placeholder="add a Task"
        value={newTodo}
        onChange={updateTodoValue}
        style={{ height: "35px", borderRadius: "10px" }}
      />
      &nbsp;&nbsp;&nbsp;
      <button onClick={addTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks to Do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                color: todo.done ? "red" : "inherit",
              }}
            >
              {todo.task}
            </span>{" "}
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>
              {todo.done ? "undo" : "Mark As done"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
