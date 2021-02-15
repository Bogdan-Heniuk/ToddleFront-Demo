import axios from "axios";
import store from "../redux/store";

const axiosWithAuth = axios.create({
    baseURL : 'http://localhost:8000'
})

const plainAxios = axios.create({
    baseURL : 'http://localhost:8000'
})

axiosWithAuth.interceptors.request.use((config) =>{
    config.headers.token = store.getState().auth.jwt
    return config
})

export {
    axiosWithAuth,
    plainAxios
}