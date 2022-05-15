import React, {useState} from "react";
import { useHistory } from "react-router-dom";

// import {AiFillGoogleCircle} from 'react-icons/ai'
export const Input = (props) => {
    function handleSubmit(e) {
        e.preventDefault();

       const data = {
            email: Email,
            pw: Password
        }
        props.onAddData(data)
    }
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const history = useHistory()
    function registerPage(e) {
        history.push("/register")
    }
    return (
        <div className="text-black text-center">
            <div className="mt-4">
                <p>It's always a pleasure to see you again.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    className="w-3/4 md:w-2/4 h-10 m-auto bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                    type="email"
                    placeholder="Email..."
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="w-3/4 md:w-2/4  h-10 m-auto bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                    type="password"
                    placeholder="Password..."
                    value={Password}
                    onChange={(e)=> setPassword(e.target.value)}
                />

                <button className=" w-3/4 md:w-2/4 m-auto  mt-2 text-blue-600 text-left">
                    Forgot password
                </button>
                <button
                    type="submit"
                    className="w-3/4 md:w-2/4 mt-12 bg-blue-600 m-auto text-white p-4 rounded-lg"
                >
                    Login
                </button>
                <button className="w-2/4 md:w-1/4 m-auto mt-8 bg-white shadow">
                    Sign in with google.
                </button>
            </form>

            <div className="mt-12">
                Dont have an account? <br />{" "}
                <button className="text-blue-600 underline" onClick={registerPage}>Sign Up</button>
            </div>
        </div>
    );
};

// export default Input;
