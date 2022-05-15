import React, { useState, useEffect } from "react";
import { Input } from "./Input";
const Verify = () => {
    function addData(data) {
        console.log(data)
        console.log(data.email)
        setEmail(data.email)
        setPassowrd(data.pw)
    }
    const [Login, setLogin] = useState(true);
    const [email, setEmail] = useState()
    const [Passowrd, setPassowrd] = useState("")
    const [Registerform, setRegisterform] = useState(false);

    function handleRegisterClick() {
        setLogin(false);
        setRegisterform(true);
    }
    function handleLoginClick() {
        setRegisterform(false);
        setLogin(true);
    }
    return (
        <div className=" flex flex-col h-screen md:flex-row justify-center align-center">
            <div className="bg-blue-600 hidden md:flex w-4/4 md:h-screen text-white md:w-2/4">{/* IMAGE */}
                {/* {password}, {user}, {mail} */}
            </div>
            <div className="w-4/4 md:w-2/4 bg-white md:h-screen p-12 text-black items-center justify-center">
                <h2 className="text-5xl text-center md:mt-24">Hello, Again!</h2>
                <Input onAddData={addData} />
            </div>

        </div>
    );
};

export default Verify;

