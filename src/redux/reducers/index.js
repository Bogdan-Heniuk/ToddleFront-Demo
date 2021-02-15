import {combineReducers} from 'redux'
import loaderReducer from "./loader";
import todosReducer from "./todo";
import {authReducer} from "./auth";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['jwt', 'user']
}


const rootReducer = combineReducers({
    loader : loaderReducer,
    todos : todosReducer,
    auth : persistReducer(persistConfig,authReducer)
})

export default rootReducer