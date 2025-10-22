import { useState, useEffect } from "react";
import "./Lottery.css";
import { genTicket, sum, celebrate } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  useEffect(() => {
    if (isWinning) {
      celebrate();
    }
  }, [ticket]);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <br />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
