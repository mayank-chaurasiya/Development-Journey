const FoodInput = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item Here"
        className="foodInput mt-2 mb-3 form-control"
        onChange={props.handleOnChange}
      />
    </>
  );
};

export default FoodInput;
