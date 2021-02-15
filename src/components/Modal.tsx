import React from 'react'
import useInputValue from "../hooks/use-input-value"
import '../styles/modal.css'
import {Input} from "@material-ui/core";
import {Todo} from "../types/todo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
interface Props{
    editedTodo : Todo,
    closeEditModal : () => void,
    onEditedTodoSave : (id : Todo['_id'], todo : Pick <Todo, 'title'>) => Promise <void>
}
const Modal: React.FC <Props> = ({editedTodo, closeEditModal, onEditedTodoSave}) => {
    const input = useInputValue(editedTodo.title, {onEnter: onSave})
    const disabled = !!!input.value().trim().length

    async function onSave() {
        if(disabled) return
        await onEditedTodoSave(editedTodo._id, {title: input.value()})
    }

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div style={{color:'#fff'}}>
                    <Input type="text" style={{color:'#fff'}} inputProps={input.bind}/>
                    <FontAwesomeIcon className='icon item-icon' icon={faEdit} onClick={onSave}/>
                </div>
                <div className="">
                    <FontAwesomeIcon style={{color:'#fff'}} className='icon item-icon' icon={faTimes} onClick={closeEditModal}/>
                </div>
            </div>
        </div>
    )
}

export default Modal