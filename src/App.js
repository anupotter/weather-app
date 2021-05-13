import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment'

function App() {

  const { cityName, setCityName } = useState("");
  const [name, setName] = useState([]);
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [cloud, setCloud] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [wind, setWind] = useState("");
  const [rain, setRain] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");


  useEffect(() => {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=44ee963ea8384bd561e7cce2a9b68f08", {
      cityName: { cityName }
    }).then((response) => {
      setName(response.data.name);
      setDate(response.data.dt);
      setTemperature(response.data.main.temp);
      setCloud(response.data.clouds.all);
      setMaxTemp(response.data.main.temp_max);
      setMinTemp(response.data.main.temp_min);
      setWind(response.data.wind.speed);
      // setRain(response.data.rain);
      setSunrise(response.data.sys.sunrise);
      setSunset(response.data.sys.sunset);
    })
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1>Weather APP</h1>
        <div>
          <h1 className="font-weight-bold">
            {name}
          </h1>
          <div>
            {moment.unix(date).format('dddd MMM Do')}
          </div>
        </div>
        <h1>
          {temperature}
        </h1>
        <h1>
          {cloud}
        </h1>
        <div className="col">
        <h1>
          {maxTemp}
        </h1>
        <div>
          High
        </div>
        </div>
        <div>
        <h1>
          {minTemp}
        </h1>
        <div>
          Low
        </div>
        </div>
        <div>
        <h1>
          {wind}
        </h1>
        <div>
          Wind
        </div>
        </div>
        <div>
          <h1>0</h1>
          <div>Rain</div>
        </div>
        <div>
        <h1>
          {moment.unix(sunrise).format('h:mm')}
        </h1>
        <div>
          Sunrise
        </div>
        </div>
        <div>
        <h1>
          {moment.unix(sunset).format('h:mm')}
        </h1>
        <div>
          Sunset
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
