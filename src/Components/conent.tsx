import { useUnit } from "effector-react";
import { $requestResult } from "../Store/model";
import { MainWeather } from "./todayMainWeather";
import SimpleSlider from "./weatherFileld";
import { BadInputAlert } from "./badInputField";

export const MainContent = () => {
  const reqRes = useUnit($requestResult)

  if (reqRes) {
    return (
      <div className="App">
        <MainWeather></MainWeather>
        <SimpleSlider></SimpleSlider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BadInputAlert></BadInputAlert>
      </div>
    );
  }
}