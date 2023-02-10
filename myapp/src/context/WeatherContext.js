import citiesOfTurkey from "../data/cities_of_turkey.json"
import React, { useState, createContext, useContext } from "react"

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {

    const [weather, setWeather] = useState([])

    const [city, setCity] = useState(citiesOfTurkey.find((item) => item.id === 34))

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    const value = {
        citiesOfTurkey,
        days,
        city,
        setCity,
        weather,
        setWeather,
    }

    return (
        <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
    )

}

export const useWeather = () => useContext(WeatherContext)
