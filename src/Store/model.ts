import { createEvent, createStore, sample } from "effector";

export interface WeatherDataProps {
  city: {
    name: string
  }
  list: {
    dt_txt: string
    main: {
      temp: number
    }
    weather: {
      main: string
    }[]
  }[]
}


export const $weatherData = createStore<WeatherDataProps | null>(null)
export const $cityInput = createStore<string>('')
export const $requestResult = createStore<boolean>(true)
export const $cartIndex = createStore<number>(0)
export const getGeolocationData = createEvent<WeatherDataProps>()
export const getCityInput = createEvent<string>()


export const getCityData = createEvent<WeatherDataProps>()
export const setWrong = createEvent()
export const setGood = createEvent()
export const setCardIndex = createEvent<any>()


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
  clock: setWrong,
  fn: () => false,
  target: $requestResult
})

sample({
  clock: setGood,
  fn: () => true,
  target: $requestResult
})

sample({
  clock: setCardIndex,
  fn: (index: number) => index,
  target: $cartIndex
})
