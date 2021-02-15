const todosReducer = (state = [], action) => {
    switch (action.type){
        case "SET_TODOS" :
            return action.payload
        case "SIGN_OUT" :
            return []
        default :
            return state
    }
}

export default todosReducer