import DayWeather from "./DayWeather";

import "../css/OtherDaysWeather.css";

const OtherDaysWeather = ({ data }) => {
  const dispalay_elements = data.consolidated_weather.map((day_data) => (
    <DayWeather
      key={day_data.id}
      weather_state_name={day_data.weather_state_name}
      weather_state_abbr={day_data.weather_state_abbr}
      min_temp={day_data.min_temp}
      max_temp={day_data.max_temp}
      applicable_date={day_data.applicable_date}
    />
  ));
  return <section id="other-days">{dispalay_elements}</section>;
};

export default OtherDaysWeather;
