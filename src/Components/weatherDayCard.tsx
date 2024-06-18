import { useUnit } from "effector-react";
import { $weatherData } from "../Store/model";
import React, { FunctionComponent } from "react";
import { BsCloudFog2Fill, BsFillCloudFill, BsFillCloudRainFill, BsFillSunFill } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";

interface indexProps {
  value: number
}

export const WeatherCard: FunctionComponent<indexProps> = ({value}) => {

  const weatherData = useUnit($weatherData)

  const iconChanger = (weather: string) => {
    let iconElement: React.ReactNode
    let iconColor: string

    switch (weather) {
      case "Rain":
        iconElement = <BsFillCloudRainFill />
        iconColor = '#1f3d7a'
        break

      case "Clear":
        iconElement = <BsFillSunFill />
        iconColor = '#ffd633'
        break

      case "Clouds":
        iconElement = <BsFillCloudFill />
        iconColor = '#8585ad'
        break

      case "Mist":
        iconElement = <BsCloudFog2Fill />
        iconColor = '#d1d1e0'
        break

      default:
        iconElement = <TiWeatherPartlySunny />
        iconColor = 'white'
    }

    return (
      <span style={ {color: iconColor} }>{ iconElement }</span>
    )
  }

  function getDayOfWeek(date: string) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
      ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][dayOfWeek];
  }

  return <div className='dayWeatherCard'>
    { weatherData && (
      <>
        <div
          className='dayWeatherCard__date'>{ getDayOfWeek(weatherData.list[8 * value].dt_txt.substring(0, 10)) }</div>
        <div className='dayWeatherCard__icon'> { iconChanger(weatherData.list[8 * value].weather[0].main) }  </div>
        <div
          className='dayWeatherCard__temperature'>{ weatherData.list[8 * value].main.temp.toString().substring(0, 2) + '°C' }</div>
        <div className='dayWeatherCard__weather'>{ weatherData.list[8 * value].weather[0].main }</div>
      </>
    ) }
  </div>
}