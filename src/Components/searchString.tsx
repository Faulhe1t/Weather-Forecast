import { useUnit } from "effector-react";
import { CiSearch } from "react-icons/ci";
import {
  $cityInput, $weatherData,
  getCityData,
  getCityInput,
  getGeolocationData,
  setGood,
  setWrong,
  WeatherDataProps
} from "../Store/model";
import { api_Endpoint, api_key } from "../Models/data";
import axios from "axios";
import React, { useEffect } from "react";

export const SearchingField = () => {

  const [city, weatherData, cityInput, CityData, wrong, good, getGeolocation] = useUnit([$cityInput, $weatherData, getCityInput, getCityData, setWrong, setGood, getGeolocationData])

  const fetchCurrentWeather = async (lat: number, lon: number) => {
    const url = `${ api_Endpoint }forecast?lat=${ lat }&lon=${ lon }&appid=${ api_key }&units=metric`
    const response = await axios.get(url)
    return response.data
  }

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      Promise.all([fetchCurrentWeather(latitude, longitude)]).then(
        ([currentWeather]) => {
          getGeolocation(currentWeather)
          console.log(weatherData)
        }
      )
    })
  }, [])


  const fetchWeatherData = async (city: string) => {
    try {
      const url = `${ api_Endpoint }forecast?q=${ city }&appid=${ api_key }&units=metric`
      const searchResponse = await axios.get(url)
      const currentWeatherData: WeatherDataProps = searchResponse.data
      return {currentWeatherData}
    } catch (error) {
      console.error('No data')
      throw error
    }
  }

  const handleSearch = async () => {
    if (city.trim() === '') {
      return
    }

    try {
      const {currentWeatherData} = await fetchWeatherData(city);
      CityData(currentWeatherData)
      good()
    } catch (error) {
      console.error('No results')
      wrong()
    }
  }

  const handleKeyDown = ({keyCode, shiftKey}: KeyboardEvent) => {
    console.log(keyCode)
    if (keyCode === 13) {
      handleSearch()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
  })

  return <div className='searchArea'>
    <input className='searchArea__inputField' type='text' placeholder='Enter a city'
           value={ city }
           onChange={ (e) => cityInput(e.target.value) }
    />
    <button className='searchArea__searchButton' onClick={ handleSearch }><CiSearch
      className='searchArea__searchButton__searchIcon'></CiSearch></button>
  </div>

}