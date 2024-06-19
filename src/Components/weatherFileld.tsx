import { WeatherCard } from "./weatherDayCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useUnit } from "effector-react";
import { $cartIndex, setCardIndex } from "../Store/model";

export default function SimpleSlider() {

  const [cardIndex, setCard] = useUnit([$cartIndex, setCardIndex])

  const days = [];

  for (let i = 0; i < 4; i++) {
    days.push(<WeatherCard value={ i }></WeatherCard>)
  }

  function showPrevCard() {
    let index = cardIndex
    if (index === 0) {index = days.length - 1} else {index -= 1}
    setCard(index)
  }

  function showNextCard() {
    let index = cardIndex
    if (index === days.length - 1) {index = 0} else {index += 1}
    setCard(index)
  }

  function secondCardIndex() {
    if (cardIndex === 3)
      return 0
    else
      return cardIndex+1

  }

  return (
    <div className='slider'>
      <button className='slider__cardSliderButton' onClick={ showPrevCard }><MdKeyboardArrowLeft /></button>
      { days[cardIndex] }
      { days [secondCardIndex()] }
      <button className='slider__cardSliderButton' onClick={ showNextCard }><MdKeyboardArrowRight /></button>
    </div>
  );
}