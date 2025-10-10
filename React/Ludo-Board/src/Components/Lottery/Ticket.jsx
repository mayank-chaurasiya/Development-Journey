import TicketNum from "./TicketNum";
import "./Lottery.css";

export default function Ticket({ ticket }) {
  return (
    <>
      <p>Ticket</p>
      <div className="ticket">
        {ticket.map((num, idx) => (
          <TicketNum num={num} />
        ))}
      </div>
    </>
  );
}
