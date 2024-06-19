import { createEvent, createStore, sample } from "effector";
import { WeatherDataProps } from "../models/data";


export const $weatherData = createStore<WeatherDataProps | null>(null)
export const $cityInput = createStore<string>('')
export const $err = createStore<string>('')


export const getGeolocationData = createEvent<WeatherDataProps>()

export const getCityInput = createEvent<string>()

export const getCityData = createEvent<WeatherDataProps>()

export const showError = createEvent()

export const hideError = createEvent()

sample({
  clock: getGeolocationData,
  fn: (receivedData: WeatherDataProps) => receivedData,
  target: $weatherData
})

sample({
  clock: getCityInput,
  fn: (input: string) => input,
  target: $cityInput
})

sample({
  clock: getCityData,
  fn: (receivedData: WeatherDataProps) => receivedData,
  target: $weatherData
})

sample({
  clock: showError,
  fn: () => 'Wrong city name!',
  target: $err,
})
sample({
  clock: hideError,
  fn: () => '',
  target: $err,
})