import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Temp from "./Temp";
import InfoExtra from "./InfoExtra";

export default function WeatherApp() {
  let [WeatherInfo, setWeatherInfo] = useState({
    location: "Mumbai",
    temp: 30,
    tempMax: 30,
    tempMin: 29,
    humidity: 74,
    feelsLike: 36,
    weather: "Haze",
    description: "Haze",
    windSpeed: 1.54,
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="atTop">
          <SearchBox updateInfo={updateInfo}></SearchBox>
          <Temp info={WeatherInfo}></Temp>
        </div>
        <div className="atBottom">
          <InfoExtra data={WeatherInfo}></InfoExtra>
        </div>
      </div>
    </div>
  );
}
