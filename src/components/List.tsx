import React from 'react'
import Item from './Item'
import {useSelector} from 'react-redux'
import {Todo} from "../types/todo";
import '../styles/List.css'

function List() {
    const todos: Todo[] = useSelector(state => state.todos)

    return (
        <ul className='list'>
                {todos.map((element) => {
                    return <Item todo={element}
                                 key={element._id}
                    />
                })}
        </ul>
    )
}

export default List