import React from "react";
import "./InfoExtra.css";

export default function InfoExtra({ data }) {
  return (
    <div className="weather-div">
      <div className="piece">
        <p className="description bold">{data.feelsLike} &deg;C</p>
        <p>Feels Like</p>
      </div>
      <div className="piece">
        <p className="description bold">{data.humidity} %</p>
        <p>Humidity</p>
      </div>
      <div className="piece">
        <p className="description bold">{data.windSpeed} MPH</p>
        <p>Wind Speed</p>
      </div>
      <div className=" piece piece-lg">
        <p className="description bold">{data.tempMax} &deg;C</p>
        <p>Max Temperature</p>
      </div>
      <div className="piece piece-lg ">
        <p className="description bold">{data.tempMin} &deg;C</p>
        <p>Min Temperature</p>
      </div>
      <div className="piece piece-lg">
        <p className="description bold">
          {data.description.charAt(0).toUpperCase() + data.description.slice(1)}
        </p>
        <p>Description</p>
      </div>
    </div>
  );
}
