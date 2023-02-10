import React, { useEffect } from 'react'
import { useWeather } from '../context/WeatherContext'
import axios from "axios"

function Days() {

    const { days, weather, setWeather, city } = useWeather()

    useEffect(() => {

        const apiKey = "3b87bc48175ba100eacde0444a6d39d8"

        const getData = async () => {
            const res = axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${apiKey}`)

            console.log((await res).data.daily)
            setWeather((await res).data.daily)
        }

        getData()

    }, [city, setWeather])

    return (
        <div className='Days'>
            {weather.map((item, i) => {
                return (
                    <div className='Day'>
                        <br />
                        <div>
                            {days[new Date(item.dt * 1000).getDay()]}
                        </div>
                        <img
                            className='Day-Image'
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt={item.weather[0].description.toUpperCase()}
                            title={item.weather[0].description.toUpperCase()}
                        />
                        <div>
                            <span>
                                Max degree :
                                {Math.round(item.temp["max"] - 273.15)}
                                °C
                            </span>
                            <br />
                            <span>
                                Min degree :
                                {Math.round(item.temp["min"] - 273.15)}
                                °C
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Days
