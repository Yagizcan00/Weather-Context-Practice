import { useEffect, useState } from 'react'

function Main() {

    const [data, setData] = useState();

    const apikey = "ce28eb38fa3b5b7dfb352d6fbec125b6"

    const cityname = "İstanbul"

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }, []);

    console.log(data);

    return (
        <div>
            <h1>Weather App</h1>
            {/* { data &&
            data.map((item) => {
                console.log(item);
            })} */}
            {
                data && data.weather.map((item) => {
                    return <div>{item.main}</div>
                })
            }
        </div>
    )
}

export default Main
