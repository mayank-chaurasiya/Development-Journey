import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox() {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY = "b8c98370acf3336e7f73ffbded4ac461";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    let result = {
      name: jsonResponse.name,
      feels_like: jsonResponse.main.feels_like,
      temp: jsonResponse.main.temp,
      humidity: jsonResponse.main.humidity,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };
  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit} className="search-form">
        <label htmlFor="outlined-basic">Search your City </label>
        <TextField
          id="outlined-basic"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        &nbsp;
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          onClick={handleSubmit}
        >
          search
        </Button>
      </form>
    </div>
  );
}
