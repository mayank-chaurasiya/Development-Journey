import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY = "b8c98370acf3336e7f73ffbded4ac461";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      if (!response.ok) {
        throw new Error(jsonResponse.message || "Location Not found");
      }

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
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(false);
      console.log(city);
      setCity("");
      let apiData = await getWeatherInfo();
      updateInfo(apiData);
    } catch (err) {
      setError(true);
      updateInfo(null);
    }
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
      {error && <h3 style={{ color: "red" }}>No such place!!</h3>}
    </div>
  );
}
