import "./App.css";
// import LudoBoard from "./Components/LudoBoard";
// import TodoList from "./Components/TodoList";
import Lottery from "./Components/Lottery/Lottery.jsx";
import Ticket from "./Components/Lottery/Ticket.jsx";

function App() {
  return (
    <>
      <Ticket ticket={[0, 1, 2]} />
    </>
  );
}

export default App;
