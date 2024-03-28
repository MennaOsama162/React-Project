import React from 'react'
import { Redirect, Route } from 'react-router'

export default function ProtectedRoute(props) {

    if (localStorage.getItem('userToken')) {
        if (props.loginUser) {
            return (<Route path={props.path}> <props.component loginUser={props.loginUser} /> </Route>)

        }
        return (<Route path={props.path}> <props.component /> </Route>)
    }
    else {
        return (<Redirect to='/login' />)

    }
}
