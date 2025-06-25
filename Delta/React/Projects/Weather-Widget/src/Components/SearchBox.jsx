import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
  };

  return (
    <div className="SearchBox">
      <h3>Search For the Weather</h3>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="outlined-required"
          label="City Name"
          variant="outlined"
          required
          size="small"
          value={city}
          onChange={handleChange}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
