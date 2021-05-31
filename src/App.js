import { useState } from "react";

import "./css/App.css";
import WeatherToday from "./components/Weather-today";
import OtherDaysWeather from "./components/OtherDaysWeather";

const App = () => {
  const [cityValue, setCityValue] = useState("");
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    setCityValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWeather([]);

    fetch(`https://www.metaweather.com/api/location/search/?query=${cityValue}`)
      .then((response) => {
        if (response.status !== 404) {
          return response.json();
        } else {
          throw new Error("Error");
        }
      })
      .then((data) => {
        if (data.length > 0) {
          fetch(`https://www.metaweather.com/api/location/${data[0].woeid}/`)
            .then((response) => response.json())
            .then((data) => {
              setWeather(data);
            });
        } else {
          setError(true);
        }
      });
  };

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
          <>
            <WeatherToday data={weather} />
            <OtherDaysWeather data={weather} />
          </>
        ) : null}

        {error && <h3>Cannot find city: {cityValue}</h3>}
      </section>
    </main>
  );
};

export default App;
