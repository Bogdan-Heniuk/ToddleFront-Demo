import React from "react";
import '../styles/RegisterForm.css'
import {registerUser} from "../redux/actions/user";
import useInputValue from "../hooks/use-input-value";
import {useDispatch, useSelector} from "react-redux";
import {Input} from "@material-ui/core";

export default function RegisterForm() {
    const dispatch = useDispatch()
    const name = useInputValue('')
    const email = useInputValue('')
    const password = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()
        dispatch(registerUser({
            name: name.value(),
            email: email.value(),
            password: password.value()
        }))
    }

    return (
        <>
            <div className='form-container'>
                <form>
                    <div>
                        <label htmlFor="">Name</label>
                        <Input inputProps={name.bind} style={{margin: '10px 0', color:"#fff"}} fullWidth/>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <Input inputProps={email.bind} style={{margin: '10px 0', color:"#fff"}} fullWidth/>
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <Input type='password' inputProps={password.bind} style={{margin: '10px 0', color:"#fff"}} fullWidth/>
                    </div>
                    <button className="btn btn-register" onClick={submitHandler}>Register</button>
                    <a className='sign-link' href="/login">Sign in</a>
                </form>
            </div>
        </>
    )
}