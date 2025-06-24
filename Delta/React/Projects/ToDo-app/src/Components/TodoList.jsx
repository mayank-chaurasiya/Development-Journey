export default function TodoList() {
  return (
    <center>
      <h1>To Do App</h1>
      <div className="container">
        <input type="text" placeholder="add a task" />
        <button className="add-button">Add Task</button>
        <br />
        <br />
        <hr />
        <h4>Tasks Todo</h4>
        <ul></ul>
      </div>
    </center>
  );
}
