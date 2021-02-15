
const initialState = {
    jwt : null,
    user : null,
    message : null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case "SIGN_IN" :
            return action.payload
        case "SIGN_OUT" :
            return initialState
        case "SET_ERROR_MESSAGE" :
            return action.payload
        default :
            return state
    }
}