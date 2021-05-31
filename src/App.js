import { useState } from "react";

import "./css/App.css";
import WeatherToday from "./components/Weather-today";

const App = () => {
  const [cityValue, setCityValue] = useState("");
  const [weather, setWeather] = useState([]);

  const handleChange = (e) => {
    setCityValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://www.metaweather.com/api/location/search/?query=${cityValue}`)
      .then((response) => response.json())
      .then((data) => {
        fetch(`https://www.metaweather.com/api/location/${data[0].woeid}/`)
          .then((response) => response.json())
          .then((data) => {
            setWeather(data);
          });
      });
  };

  console.log(weather);
  return (
    <main>
      <form onSubmit={handleSubmit} id="form">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={cityValue}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <section id="weather-data">
        {weather.consolidated_weather !== undefined ? (
          <WeatherToday data={weather} />
        ) : null}
        <section id="weather-other-days">
          <section className="day"></section>
          <section className="day"></section>
          <section className="day"></section>
          <section className="day"></section>
          <section className="day"></section>
        </section>
      </section>
    </main>
  );
};

export default App;
