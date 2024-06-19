import { useUnit } from "effector-react";
import { CiSearch } from "react-icons/ci";
import { $cityInput, getCityData, getCityInput, hideError, showError } from "../store/model";
import { api_Endpoint, api_key, WeatherDataProps } from "../models/data";
import axios from "axios";

export const SearchingField = () => {

  const [city, getCityI, getCityD, showMessage, hideMessage] = useUnit([$cityInput, getCityInput, getCityData, showError, hideError])

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
      getCityD(currentWeatherData)
      hideMessage()
    } catch (error) {
      console.error('No results')
      showMessage()
    }
  }


  return <div className='searchArea'>
    <input className='searchArea__inputField' type='text' placeholder='Enter a city'
           value={ city }
           onChange={ (e) => getCityI(e.target.value) }
    />
    <button className='searchArea__searchButton' onClick={ handleSearch }><CiSearch
      className='searchArea__searchButton__searchIcon'></CiSearch></button>
  </div>

}