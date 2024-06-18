import React from 'react';
import { SearchingField } from "./Components/searchString";
import "./Style.css"
import { MainWeather } from "./Components/todayMainWeather";
import { WeatherField } from "./Components/weatherFileld";
import { ErrorMessage } from "./Components/errorMessageField";

function App() {
  return (
    <div className="App">

      <ErrorMessage></ErrorMessage>
      <SearchingField></SearchingField>
      <MainWeather></MainWeather>
      <WeatherField></WeatherField>
    </div>
  );
}

export default App;
