const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div id="calc-buttons-container">
        {buttonNames.map((buttonName) => {
          return (
            <button
              className="calc-buttons"
              key={buttonName}
              onClick={() => onButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default ButtonsContainer;
