import { async } from "@firebase/util";
import React from "react";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Main = () => {
    const { user, logout } = UserAuth();
const history = useHistory()
    const handleLogOut = async() => {
        try {
            await logout()
            history.push("/")
            window.location.reload()
            console.log("loged out")
        } catch (e) {
            console.log(e.message)
        }
    }
    return (

        <>
            <div>
                <h1>Email: {user && user.email}</h1>
            </div>
            <button onClick={handleLogOut}>Log Out</button>
        </>
    );
};

export default Main;
