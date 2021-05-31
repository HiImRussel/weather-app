import "../css/DayWeather.css";

const DayWeather = ({
  weather_state_name,
  weather_state_abbr,
  min_temp,
  max_temp,
  applicable_date,
}) => {
  return (
    <div className="day">
      <p>{applicable_date}</p>
      <img
        src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}
        alt="weather ico"
      />
      <h2>{weather_state_name}</h2>
      <span>min: {Math.round(min_temp * 100) / 100}</span>
      <span>max: {Math.round(max_temp * 100) / 100}</span>
    </div>
  );
};

export default DayWeather;
