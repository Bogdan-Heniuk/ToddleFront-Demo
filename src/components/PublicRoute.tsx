import React from "react";
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";

const PublicRoute = ({component: Component, ...rest}) => {
    const user = useSelector(state => state.auth.user)

    return (
        <Route {...rest} render={props => (
            user ? <Redirect to="/todos" /> : <Component {...props} />
        )} />
    );
};

export default PublicRoute