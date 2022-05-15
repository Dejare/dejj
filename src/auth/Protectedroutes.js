import React from 'react'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
const Protectedroutes = ({children}) => {
    const {user} = UserAuth()
    const history = useHistory()
    
        if (!user) {
            <Redirect to="/signin"/>
            // history.push("/signin")
        }
    return children
}

export default Protectedroutes