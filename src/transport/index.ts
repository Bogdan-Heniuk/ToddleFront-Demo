import axios from "axios";
import store from "../redux/store";

const axiosWithAuth = axios.create({
    baseURL : 'https://toddl.herokuapp.com/'
})

const plainAxios = axios.create({
    baseURL : 'https://toddl.herokuapp.com/'
})

axiosWithAuth.interceptors.request.use((config) =>{
    config.headers.token = store.getState().auth.jwt
    return config
})

export {
    axiosWithAuth,
    plainAxios
}