import jwtDecode from 'jwt-decode'

export const setOffLoading = () => {
    return{
        type : "SET_OFF_LOADING"
    }
}

export const setTodos = (todo) => {
    return {
        type: "SET_TODOS",
        payload : todo
    }
}
export const setErrorMessage = (message) => {
    return{
        type : "SET_ERROR_MESSAGE",
        payload : {
            message
        }
    }
}
export const signIn = (jwt) => {
    return {
        type : "SIGN_IN",
        payload : {
            jwt,
            user : jwtDecode(jwt)
        }

    }
}

export const signOut = () => {
    return {
        type : "SIGN_OUT",
    }
}

export const loggedIn = (userData) => {
    return {
        type : "LOGGED_IN",
        payload : userData
    }
}