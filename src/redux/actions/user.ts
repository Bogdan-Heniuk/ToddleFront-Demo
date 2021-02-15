import {User} from "../../types/user";
import {axiosWithAuth, plainAxios} from "../../transport";
import {setErrorMessage, signIn, signOut} from "./index";

export const registerUser = (user: Pick<User, 'name' | 'email' | 'password'>) => async (dispatch) => {
    try {
        const res = await plainAxios.post(`/users`, {
            name: user.name,
            email: user.email,
            password: user.password
        })

        if(!res.data.message){
            dispatch(signIn(res.data))
        } else {
            dispatch(setErrorMessage(res.data.message))
        }
    } catch (ex) {
        alert(ex.message)
    }
}

export const verifyUser = () => async (dispatch) => {
    try {
        await axiosWithAuth.post('users/verify')
    } catch (e) {
        dispatch(signOut())
    }
}


