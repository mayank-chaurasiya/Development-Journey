import Quote from "./Quote.jsx";
import Content from "./Content.jsx";

export default function Card() {
  return (
    <div className="mt-20 mx-50 flex flex-wrap rounded-lg border-2 border-black">
      <Quote />
      <Content />
    </div>
  );
}
