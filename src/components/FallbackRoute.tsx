import React from "react";
import {Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";

const FallbackRoute = () => {
    const user = useSelector(state => state.auth.user)
    if(user) return <Redirect to='/todos'/>
    return <Redirect to ='/login'/>
}

export default FallbackRoute