import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox() {
  const CLEAR_URL =
    "https://images.unsplash.com/photo-1511438463149-1d696b9baba7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470";

  let info = {
    city: "Delhi",
    feels_like: "",
    humidity: "",
    temp: "",
    temp_max: "",
    temp_min: "",
    weather: "Haze",
  };

  return (
    <div className="infoBox">
      <h2>Weather of {info.city}</h2>
      <Card sx={{ maxWidth: 500, minWidth: 500 }}>
        <CardMedia
          sx={{ height: 160 }}
          image={CLEAR_URL}
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
            <p>Feels_Like : {info.feels_like}</p>
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
