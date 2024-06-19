import React from 'react';
import { SearchingField } from "./components/searchString";
import "./styles.scss"
import { MainWeather } from "./components/todayMainWeather";
import { WeatherField } from "./components/weatherFileld";
import { ErrorMessage } from "./components/errorMessageField";

// TODO ознакомиться со стилями

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
