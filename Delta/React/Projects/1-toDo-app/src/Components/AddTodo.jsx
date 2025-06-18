function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row items-row">
        <div className="col-6">
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-3">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success custom-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
