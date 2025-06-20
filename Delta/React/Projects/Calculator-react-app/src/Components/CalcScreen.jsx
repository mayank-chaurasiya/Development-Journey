const CalcScreen = ({ calcValue }) => {
  return (
    <>
      <input
        type="text"
        id="calc-screen"
        value={calcValue}
        readOnly
      />
    </>
  );
};
export default CalcScreen;
