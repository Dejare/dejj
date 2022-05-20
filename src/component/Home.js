import axios from "axios";
import React, { useState, useEffect } from "react";
import "./main.scss";

const Home = () => {
    const [Input, setInput] = useState("");
    const [Output, setOutput] = useState("");
    const [Loading, setLoading] = useState(true);
    const [sunny, setsunny] = useState(false)
    const APIkey = "595f035757e3560197028500e5259473";

    // getting data first by location
    // useEffect(() => {
    if (navigator.geolocation) {
        console.log("true");
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}&units=metric`;
            axios
                .get(url)
                .then((res) => {
                    localStorage.setItem("data", JSON.stringify(res.data));
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Input === "") {
            alert("Please enter a value");
        } else {
            setTimeout(() => {
                axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/weather?q=${Input}&appid=${APIkey}&units=metric`
                    )
                    .then((res) => {
                        console.log(res.data);
                        setOutput(res.data);
                        // LOCAL STORAGE
                        localStorage.setItem("data", JSON.stringify(res.data));
                        console.log(Output);
                        setLoading(false)
                        // const imgsrc = `http://openweathermap.org/img/wn/${res.data.}@2x.png`
                        const imgsrc = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
                    })
                    .catch((err) => {
                        console.log(err);
                        if (err == "Network Error") {
                            console.log("nettt")
                        }
                    });
            }, 1000);
        }
    };
// CHANGING BACKGROUND IF ITS SUNNY OR CLOUDY
useEffect(() => {
    const weathher = 30;

if (weathher >= 30) {
    setsunny(false)
}
else{
    setsunny(true)
}
}, [])

    // getting time and date
    let date = new Date();
    let time =
        (date.getHours().toString().length > 1
            ? date.getHours()
            : "0" + date.getHours()) +
        ":" +
        (date.getMinutes().toString().length > 1
            ? date.getMinutes()
            : "0" + date.getMinutes());

    var today = new Date();
    var todaydate =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    console.log(date);
    // output 2021-7-9

    console.log(time);

    const response = JSON.parse(localStorage.getItem("data"));

  

    return (
        <>
            {Loading ? 
                
                ( <div className={sunny ? "main" : "main cloudy"}>
                <div className="left">
                    <div>
                        <header>the.weather</header>
                    </div>
                    <div className="left_mainWeatherInfo">
                        <div>
                            <h1>.....</h1>
                        </div>
                        <div className="left_locationDate">
                            <h2>
                                {Input}, .....
                            </h2>
                            <p>
                                {" "}
                                {/**date, time */}
                                {time}, {todaydate}
                            </p>
                        </div>
                        <div className="image">
                            {/* image */}
                            {/* <img src={imgsrc} alt="weather image" /> */}
                            <p>.....</p>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="right">
                    <div className="inputform">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Another location"
                                onChange={(e) => setInput(e.target.value)}
                                value={Input}
                            />
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
                            <p>.....</p>
                        </div>
                        <div>
                            <p>Humidity</p>
                            <p>.....%</p>
                        </div>
                        <div>
                            <p>Wind</p>
                            <p>.....m/s</p>
                        </div>
                        <div>
                            <p>Clouds</p>
                            <p>.....</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        ): ( <div className="main">
                    <div className="left">
                        <div>
                            <header>the.weather</header>
                        </div>
                        <div className="left_mainWeatherInfo">
                            <div>
                                <h1>{response.main.temp}</h1>
                            </div>
                            <div className="left_locationDate">
                                <h2>
                                    {Input}, {response.sys.country}
                                </h2>
                                <p>
                                    {" "}
                                    {/**date, time */}
                                    {time}, {todaydate}
                                </p>
                            </div>
                            <div className="image">
                                {/* image */}
                                <img src={imgsrc} alt="weather image" />
                                <p>{response.weather[0].main}</p>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="right">
                        <div className="inputform">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Another location"
                                    onChange={(e) => setInput(e.target.value)}
                                    value={Input}
                                />
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
                                <p>{response.wind.speed}m/s</p>
                            </div>
                            <div>
                                <p>Clouds</p>
                                <p>{response.clouds.all}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Home;
