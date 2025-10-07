import { useState } from "react";

export default function LudoBoard() {
  let [move, setMove] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });

  let updateBlue = () => {
    setMove((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  };
  let updateRed = () => {
    setMove((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };
  let updateYellow = () => {
    setMove((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMove((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };

  return (
    <>
      <div>
        <p>Game board</p>
        <div className="board">
          <p>Blue moves = {move.blue}</p>
          <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
            +1
          </button>
          <p>Yellow moves = {move.yellow}</p>
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={updateYellow}
          >
            +1
          </button>
          <p>Green moves = {move.green}</p>
          <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
            +1
          </button>
          <p>Red moves = {move.red}</p>
          <button style={{ backgroundColor: "red" }} onClick={updateRed}>
            +1
          </button>
        </div>
      </div>
    </>
  );
}
