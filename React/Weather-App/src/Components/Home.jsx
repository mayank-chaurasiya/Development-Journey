import "./Home.css"
import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx"
export default function Home() {
  return (
    <>
      <div className="main">
        <h1>Weather App</h1>
        <SearchBox/>
        <InfoBox/>
      </div>
    </>
  );
}
