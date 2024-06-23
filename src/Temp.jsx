import "./Temp.css";
import Icons from "./Icons";

export default function Temp({ info }) {
  return (
    <div className="temp-div">
      <h2 className="Location underline-incr">{info.location}</h2>
      <div className="Temperature">{info.temp.toFixed()}&deg;C</div>
      <div className="nature">
        {info.weather}
        <div className="icons">
          <Icons iconInfo={info.weather}></Icons>
        </div>
      </div>
    </div>
  );
}
