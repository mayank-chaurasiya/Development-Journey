import { useState } from "react";
import "./Home.css";
import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);

  let updateInfo = (apiResponse) => {
    setWeatherData(apiResponse);
  };

  return (
    <>
      <div className="main">
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo} />
        <hr
          style={{
            backgroundColor: "blue",
            height: "2px",
            border: "none",
            width: "60%",
            marginTop: "30px",
          }}
        />
        {weatherData && <InfoBox info={weatherData} />}
      </div>
    </>
  );
}
