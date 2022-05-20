import axios from "axios";
import React, { useState, useEffect } from "react";
import "./main.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
// import line from '../images/llline.svg'

const Home = () => {
    const [Input, setInput] = useState("");
    const [Output, setOutput] = useState("");
    const [Loading, setLoading] = useState(false);
    const [sunny, setsunny] = useState(false);
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
                    setLoading(true);
                    const imgsrc = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
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
                let imgsrc;
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
                        setLoading(true);
                        // const imgsrc = `http://openweathermap.org/img/wn/${res.data.}@2x.png`
                        imgsrc = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
                    })
                    .catch((err) => {
                        console.log(err);
                        if (err == "Network Error") {
                            console.log("nettt");
                        }
                    });
            }, 1000);
        }
    };
    // CHANGING BACKGROUND IF ITS SUNNY OR CLOUDY
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
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var todaydate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-";
    var month = monthNames[today.getMonth()];
    var todayDate = today.getDate();
    // console.log(date);
    // output 2021-7-9

    console.log(time);

    const response = JSON.parse(localStorage.getItem("data"));

    return (
        <>
            {Loading ? (
                <div className="">
                    <header className=" w-screen flex md:-row justify-between p-12">
                        <div className="font-light text-xl">The.weather</div>
                        <div className="text-xl hidden md:flex flex-row">
                            <MdOutlineLocationOn />
                            {response.name}, {response.sys.country}
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className="rounded-lg md:px-2 text-center py-2 focus:ring-1"
                                    placeholder="Search your Location"
                                    onChange={(e) => setInput(e.target.value)}
                                    value={Input}
                                />
                            </form>
                        </div>
                    </header>

                    <div className="weatherCard mt-0 mx-auto rounded-3xl shadow flex flex-col justify-around">
                        <div className="mx-auto mt-14 text-6xl">
                            <h1>{response.main.temp}</h1>
                        </div>
                        <div>{/* <img src={} alt="line" /> */}</div>
                        <div className="image flex align-center justify-around">
                            <img
                                src={`http://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png`}
                            />
                        </div>
                        <div className="text-center mb-12">
                            <h3>{response.weather[0].main}</h3>
                        </div>
                    </div>

                    {/* bottom */}

                    <div className="flex flex-row justify-between my-8 text-center">
                        <div className="mx-12">
                            <h2>Pressure</h2>
                            <p>{response.main.pressure}</p>
                        </div>
                        <div>
                            <h2>Wind</h2>
                            <p>{response.wind.speed}m/s</p>
                        </div>

                        <div className="dateCard w-screen m-auto text-center rounded-xl flex flex-row justifyy-between ">
                            <div>
                                <h2>{todayDate}</h2>
                            </div>
                            <p>{month}</p>
                        </div>

                        <div>
                            <h2 >Humidity</h2>
                            <p>{response.main.humidity}</p>
                        </div>
                        <div className="mx-12">
                            <h2>Humidity</h2>
                            <p>{response.main.humidity}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>WAIT SMALL</div>
            )}
        </>
    );
};

export default Home;
