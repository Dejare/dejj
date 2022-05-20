import axios from "axios";
import React, { useState, useEffect } from "react";
import "./main.scss";

const Home = () => {
    const [Input, setInput] = useState("");
    const [Output, setOutput] = useState("");
    const APIkey = "595f035757e3560197028500e5259473"
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Input === "") {
            alert("Please enter a value");
        } else {
            setTimeout(() => {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Input}&appid=${APIkey}&units=metric`).then((res) => {
                    console.log(res.data);
                    setOutput(res.data);
                    // LOCAL STORAGE
                    localStorage.setItem("data", JSON.stringify(res.data));
                    console.log(Output)
                }).catch((err) => {
                    console.log(err);
                });
            }, 1000);
        }
    }



    const response = JSON.parse(localStorage.getItem("data"));


    return (
        <div className="main">
            {/* left */}
            <div className="left">
                <div>
                    <header>the.weather</header>
                </div>
                <div className="left_mainWeatherInfo">
                    {/* mainn weather info */}
                    <div>
                        <h1>{response.main.temp}</h1>
                    </div>
                    <div className="left_locationDate">
                        <h2>{Input}</h2>
                        <p>
                            {" "}
                            {/**date, time */}10:36 Tuesday, 22nd October '19
                        </p>
                    </div>
                    <div className="image">
                        {/* image */}
                        <img src="" alt="" />
                        <p>{response.weather[0].main}</p>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className="right">
                <div className="inputform">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Another location" onChange={(e) => setInput(e.target.value)} value={Input} />
                        <button type="submit">S</button>
                    </form>
                </div>
                <div className="locationlist">
                    <ul>
                        <li>Birmingham</li>
                        <li>Manchester</li>
                        <li>New York</li>
                        <li>Carlifornia</li>
                    </ul>
                </div>
                <hr />

                {/* weatherdetails */}

                <div className="weatherdetails">
                    <h2>Weather Details</h2>
                    <div>
                        <p>Pressure</p>
                        <p>{response.main.pressure}</p>
                    </div>
                    <div>
                        <p>Humidity</p>
                        <p>{response.main.humidity}%</p>
                    </div>
                    <div>
                        <p>Wind</p>
                        <p>1km/h</p>
                    </div>
                    <div>
                        <p>Rain</p>
                        <p>0mm</p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Home;
