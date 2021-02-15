import React, {useState} from "react"
import useInputValue from "../hooks/use-input-value"
import '../styles/AddTodo.css'
import {Input} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {addTodo} from "../redux/actions/todo";
import {useDispatch} from "react-redux";

const AddTodo: React.FC = () => {
    const dispatch = useDispatch()
    const input = useInputValue('', {onEnter : submitHandler})
    const [errorMessage, setErrorMessage] = useState('')

    function submitHandler(): void {
        setErrorMessage('')
        if (!input.value()) {
            setErrorMessage('Empty string...')
        } else {
            input.value().trim()
            dispatch(addTodo(input.value()));
            input.clear()
        }
    }

    return (
        <div >
            <div className="form">
            <Input  style={{color: '#fff'}} fullWidth inputProps={input.bind} />
            <FontAwesomeIcon className='icon add-icon' icon={faPlusCircle} onClick={submitHandler}/>
            </div>
            <div className="message">
                <small style={{color: '#fff'}}>{errorMessage}</small>
            </div>
        </div>
    )
}

export default AddTodo
