import React, {useContext} from 'react'
import '../styles/Item.css'
import Context from "../context";
import {Checkbox} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Todo} from "../types/todo";
import {removeTodo} from "../redux/actions/todo";
import {useDispatch} from 'react-redux'

export interface ItemProps {
    todo: Todo,
}

const Item: React.FC<ItemProps> = ({todo}) => {
    const dispatch = useDispatch()
    const {openEditModal, onToggle} = useContext(Context)
    const classes: Array<string> = ['list-item']
    if (todo.completed) {
        classes.push('done')
    }
    return (
        <>
            <li style={{listStyle : "none"}} className={classes.join(' ')}>
                    <div className="checkbox">
                            <Checkbox
                                value="checkedA"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                                checked={todo.completed}
                                onChange={async () =>{
                                    await onToggle(todo._id)
                                }}/>
                            {todo.title}
                    </div>

                <div className='list-buttons'>
                    <FontAwesomeIcon className='icon item-icon' icon={faEdit} onClick={() => openEditModal(todo._id)}/>
                    <FontAwesomeIcon className='icon item-icon' icon={faTrashAlt} onClick={() => dispatch(removeTodo(todo._id))}/>
                </div>

            </li>
        </>
    )
}

export default Item