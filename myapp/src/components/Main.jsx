import React, { useEffect, useState } from 'react'
import cities from "../data/cities.json"

function Main() {

    const [form, setForm] = useState({ name: "" })

    const [myList, setMyList] = useState([])

    const myCityArray = []

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {

        e.preventDefault()

        if (form.name === "") {
            alert("You have to enter something!!!")
            return false
        }

        setForm({ ...form, name: "" })

        setMyList([form])
    }

    cities.map(({ name }) => {
        name = myCityArray.push(name);
    })

    console.log(myCityArray);

    return (
        <div className='Body'>
            <h1>Weather App</h1>
            <form onSubmit={onSubmit}>
                <input
                    name='name'
                    value={form.name}
                    onChange={onChangeInput}
                    placeholder="Enter the City"
                />
                <button>Add</button>
            </form>
            <div className='List'>
                {myList.map((item, i) => (
                    <div>
                        <ul>
                            <li key={i}>{item.name}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main
