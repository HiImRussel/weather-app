import "../css/weather-today.css";

const WeatherToday = ({ data }) => {
  const sun_set = new Date(toString(data.sun_set));
  console.log(sun_set);
  return (
    <section id="weather-today">
      <h2>City: {data.title}</h2>
      <p>{data.consolidated_weather[0].applicable_date}</p>
      <img
        src={`https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`}
        alt="weather ico"
      />
      <h3>{data.consolidated_weather[0].weather_state_name}</h3>
      <div id="main-weather-data">
        <span>
          min:
          {Math.round(data.consolidated_weather[0].min_temp * 100) / 100}
        </span>
        <span>
          max:
          {Math.round(data.consolidated_weather[0].min_temp * 100) / 100}
        </span>
      </div>
    </section>
  );
};

export default WeatherToday;
