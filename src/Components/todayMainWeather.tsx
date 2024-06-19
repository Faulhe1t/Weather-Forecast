import React from "react";
import { $weatherData, getGeolocationData } from "../Store/model";
import { useUnit } from "effector-react";
import { BsCloudFog2Fill, BsFillCloudFill, BsFillCloudRainFill, BsFillSunFill } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";

export const MainWeather = () => {

  const [weatherData, getGeolocation] = useUnit([$weatherData, getGeolocationData])


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
      <span className='mainWeatherCard__mainIcon' style={ {color: iconColor} }>{ iconElement }</span>
    )
  }

  return <div className='mainWeatherCard'>
    { weatherData && (
      <>
        <div> { iconChanger(weatherData.list[0].weather[0].main) }  </div>
        <div
          className='mainWeatherCard__temperature'>{ weatherData.list[0].main.temp.toString().substring(0, 2) + '°C' }</div>
        <div className='mainWeatherCard__weather'>{ weatherData.list[0].weather[0].main }</div>
        <div className='mainWeatherCard__city'>{ weatherData.city.name }</div>
      </>
    ) }

  </div>
}