import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist'

import rootReducer from './reducers/index';

import thunk from 'redux-thunk';

const w : any = window as any;
const devtools: any = w.__REDUX_DEVTOOLS_EXTENSION__ ? w.__REDUX_DEVTOOLS_EXTENSION__() : (f:any)=>f;
const middleware = applyMiddleware(thunk);
const store: any = middleware(devtools(createStore))(rootReducer);

export const persistor = persistStore(store)
    export default store
