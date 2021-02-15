import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import './styles/App.css';
import Context from "./context";
import Modal from './components/Modal'
import {Todo} from "./types/todo";
import {editTodo, findTodo} from "./redux/actions/todo";
import LoginForm from "./components/LoginForm";
import Content from "./components/Content";
import {verifyUser} from "./redux/actions/user";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import RegisterForm from "./components/RegisterForm";
import FallbackRoute from "./components/FallbackRoute";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {signOut} from "./redux/actions";

function App() {
    const dispatch = useDispatch()
    const message = useSelector(state => state.auth.message)
    const todos = useSelector(state => state.todos)
    const user = useSelector(state => state.auth.user)
    const [isEditModal, setIsEditModal] = React.useState <boolean>(false)
    const [editedTodo, setEditedTodo] = React.useState <Todo>(null)

    useEffect(()=>{
        if(user){
            dispatch(verifyUser())
        }
    }, [])

    function openEditModal(id: Todo['_id']) {
        const todo = findTodo(todos, id)
        setEditedTodo(todo)
        setIsEditModal(true);
    }



    function closeEditModal() {
        setIsEditModal(false)
        setEditedTodo(null)
    }

    async function onToggle(id: Todo['_id']) {
        const todo = findTodo(todos, id)
        dispatch(editTodo(id, {completed: !todo.completed}))
    }

    async function onEditedTodoSave(id: Todo['_id'], todo: Pick<Todo, 'title'>) {
        dispatch(editTodo(id, todo))
        closeEditModal()
    }

    return(
        <Router>
            <main>
                <Context.Provider value={{openEditModal, onToggle}}>
                    <div className="container">
                        <div className="title">
                            <p>Toddle</p>
                            {user && <FontAwesomeIcon className='sign-out-icon' icon={faSignOutAlt} onClick={()=>dispatch(signOut())}/>}
                        </div>
                        <div className= 'error' style={message && {display:'flex'} }>{message}</div>
                        <div className="modal-window">
                            {isEditModal && <Modal
                                closeEditModal={closeEditModal}
                                editedTodo={editedTodo}
                                onEditedTodoSave={onEditedTodoSave}
                            />}
                        </div>
                        <Switch>
                            <PublicRoute path = "/login" exact component={LoginForm}/>
                            <PublicRoute path = "/register" exact component={RegisterForm}/>
                            <PrivateRoute path ="/todos" exact component={Content}/>
                            <Route path='*' component={FallbackRoute}/>
                        </Switch>
                    </div>
                </Context.Provider>
            </main>
        </Router>
        )
}

export default App;
