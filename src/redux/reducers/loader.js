const loaderReducer = (state = true, action) => {
    switch (action.type){
        case "SET_OFF_LOADING" :
            return state = false
        default :
            return state
    }
}

export default loaderReducer