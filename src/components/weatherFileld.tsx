import { WeatherCard } from "./weatherDayCard";


//TODO заменить на map массив

export const WeatherField = () => {
  const days = [];

  for (let i = 0; i < 4; i++) {
    days.push(<WeatherCard value={ i }></WeatherCard>)
  }

  return <div className='forecastField'>
    { days }
  </div>
}