import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import Alert from "./Alert";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let [Location, setLocation] = useState("");
  let [error, setError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Auto close after 3 seconds
  };

  let handleChange = (e) => {
    setLocation(e.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLocation("");
      console.log(Location);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${Location}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      let jsonResponse = await response.json();
      let result = {
        location: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].main,
        windSpeed: jsonResponse.wind.speed,
        description: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <input
          id="Location"
          type="text"
          placeholder="Enter Location"
          className="Input"
          value={Location}
          onChange={handleChange}
          required
        />
        <Button className="Search-btnn" variant="contained" type="submit">
          <SearchIcon />
        </Button>
      </form>
      {error && (
        <div className="app">
          <button className="alert-btn" onClick={handleShowAlert}>
            Show Alert
          </button>
          {showAlert && (
            <Alert
              message1="Sorry! This location is not in our API"
              message2="Please refresh or search new location!"
              onClose={() => setShowAlert(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}
