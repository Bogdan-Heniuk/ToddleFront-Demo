import axios from "axios";
import store from "../redux/store";

const axiosWithAuth = axios.create({
    baseURL : 'http://toddleapp-env.eba-hyeetpfj.us-east-1.elasticbeanstalk.com'
})

const plainAxios = axios.create({
    baseURL : 'http://toddleapp-env.eba-hyeetpfj.us-east-1.elasticbeanstalk.com'
})

axiosWithAuth.interceptors.request.use((config) =>{
    config.headers.token = store.getState().auth.jwt
    return config
})

export {
    axiosWithAuth,
    plainAxios
}