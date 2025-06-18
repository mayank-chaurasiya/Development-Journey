function TodoItems({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row items-row">
        <div className="col-6 ln-h">{todoName}</div>
        <div className="col-3 ln-h">{todoDate}</div>
        <div className="col-3">
          <button type="button" className="btn btn-danger custom-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
