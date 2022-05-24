import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import  {UserAuth} from '../context/AuthContext'
const {user} = UserAuth()
const Protectedroutes = ({children, ...rest}) => {
    return (
        <Route {...rest} render={()=>{
            return user ? children : <Redirect to="/signin"/>
        }}/>

    )
}

export default Protectedroutes