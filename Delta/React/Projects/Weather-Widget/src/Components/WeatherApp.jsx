import "./WeatherApp.css";
import InfoBox from "./Infobox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "somewhere on earth",
    feelsLike: 24.88,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.99,
    humidity: "47",
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weatherApp">
      <h1 className="h1">Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
