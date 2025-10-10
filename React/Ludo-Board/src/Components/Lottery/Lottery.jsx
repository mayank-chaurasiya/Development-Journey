import { useState, useEffect } from "react";
import "./Lottery.css";
import { genTicket, sum, celebrate } from "./helper";

export default function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === 15;

  useEffect(() => {
    if (isWinning) {
      celebrate();
    }
  }, [ticket]);

  let buyTicket = () => {
    setTicket(genTicket(3));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <div className="ticket">
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
