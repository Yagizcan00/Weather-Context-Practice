import React from 'react'
import { useWeather } from '../context/WeatherContext'

function Dropdown() {

    const { city, setCity, citiesOfTurkey } = useWeather()

    const changeCity = (e) => {
        citiesOfTurkey.filter((item) => {
            if (item.name === e.target.value) {
                setCity(item)
            }
        })
    }

    return (
        <div className='Dropdown'>
            <select className='Select' name="" id="" value={city.name} onChange={changeCity}>
                {citiesOfTurkey.map((item, i) => {
                    return (
                        <option value={item.name} key={i}>
                            {item.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Dropdown
