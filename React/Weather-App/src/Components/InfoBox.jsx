import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  const CLEAR_URL =
    "https://images.unsplash.com/photo-1511438463149-1d696b9baba7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470";

  const CLOUDY_URL =
    "https://images.unsplash.com/photo-1643251720307-6524df9108d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470";

  const WINDY_URL =
    "https://images.unsplash.com/photo-1675782222193-eac743938486?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=813";

  const FOG_MIST_URL =
    "https://images.unsplash.com/photo-1679597454552-748ac11a9c8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1597";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1753608486705-70a5ba22e7c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632";

  const SNOW_URL =
    "https://images.unsplash.com/photo-1609971302302-881b804d0c36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774";

  return (
    <div className="infoBox">
      <h2>Weather of {info.name}</h2>
      <Card sx={{ maxWidth: 500, minWidth: 500 }}>
        <CardMedia
          sx={{ height: 160 }}
          image={
            info.weather === "mist"
              ? FOG_MIST_URL
              : info.weather === "cloudy"
              ? CLOUDY_URL
              : info.weather === "clear"
              ? CLEAR_URL
              : info.weather === "windy"
              ? WINDY_URL
              : info.weather === "fog"
              ? FOG_MIST_URL
              : info.weather === "rain"
              ? RAIN_URL
              : info.weather === "snow"
              ? SNOW_URL
              : CLEAR_URL
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <i>{info.weather}</i>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Feels_Like : {info.feels_like}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Temperature : {info.temp}&deg;C</p>
            <p>
              Min. Temperature : {info.temp_min}
              &deg;C&nbsp;&nbsp;&nbsp;&nbsp;Max. Temperature : {info.temp_max}
              &deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
