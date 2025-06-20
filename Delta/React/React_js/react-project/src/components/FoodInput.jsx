const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item Here"
        className="foodInput mt-2 mb-3 form-control"
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default FoodInput;
