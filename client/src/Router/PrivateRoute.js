import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const token = localStorage.getItem('token')

    // absence du token

    if (!token) {
        return <Redirect to='/login' />
    }

    return (

        // token mawjoud  
        <Route component={Component} {...rest} />
    )
}

export default PrivateRoute
