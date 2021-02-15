import '../styles/App.css'
import AddTodo from "./AddTodo";
import Loader from "./Loader";
import List from "./List";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../redux/actions/todo";

export default function Content() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loader)
    const todos = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    return (
        <div>
            <div className='add-todo'>
                <AddTodo/>
            </div>

            {loading ? <Loader/> : (
                <div className="content">
                    <div className='tasks'>
                        {todos.length ? <List/> : loading ? null : <p style={{color: '#ffffff'}}>No Todos</p>}
                    </div>
                </div>
            )}
        </div>
    )}

