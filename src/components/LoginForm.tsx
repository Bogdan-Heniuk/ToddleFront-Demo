import React from "react";
import '../styles/RegisterForm.css'
import useInputValue from "../hooks/use-input-value";
import {Input} from "@material-ui/core";
import {setErrorMessage, signIn} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {plainAxios} from "../transport";

export default function LoginForm() {
    const dispatch = useDispatch()
    const LogUser = async (user: { password: string; email: string }) => {
        try {
            const foundUserRes = await plainAxios.post(`/users/login`, {
                email: user.email,
                password: user.password
            })
            if (!foundUserRes.data.message) {
                dispatch(signIn(foundUserRes.data))
            } else {
                dispatch(setErrorMessage(foundUserRes.data.message))
            }

        } catch (e) {
            console.log(e)
        }
    }

    async function submitHandler(event) {
        event.preventDefault()
        await LogUser({
            email: email.value(),
            password: password.value()
        })
    }

    const email = useInputValue()
    const password = useInputValue()

    return (
        <div className='form-container'>
            <form>
                <div>
                    <label htmlFor="">Email</label>
                    <Input inputProps={email.bind} style={{margin: '10px 0', color:"#fff"}} fullWidth/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <Input type={'password'} inputProps={password.bind} style={{margin: '10px 0', color:"#fff"}} fullWidth/>
                </div>
                <div className="sign-in-button">
                        <button className="btn btn-register" onClick={submitHandler}>Log in</button>
                        <a className='sign-link' href="/register">Sign up</a>
                </div>
            </form>
        </div>
    )
}