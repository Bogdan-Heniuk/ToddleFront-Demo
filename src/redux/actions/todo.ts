import {Todo} from "../../types/todo";
import {setTodos, setOffLoading} from './index'
import {axiosWithAuth} from "../../transport";

export const getTodos = () => async (dispatch): Promise<void> => {
    const res = await axiosWithAuth.get('/todos')

    dispatch(setTodos(res.data))
    dispatch(setOffLoading())
}

export const editTodo = (id: Todo['_id'], todo: Partial<Todo>) => async (dispatch) => {
    try {
        await axiosWithAuth.patch(`/todos/${id}`, todo)
        dispatch(getTodos())
    } catch (ex) {
        alert(ex.message)
    }
}

export const removeTodo = (id: Todo['_id']) => async (dispatch) => {
    try {
        await axiosWithAuth.delete(`/todos/${id}`)
        dispatch(getTodos())
    } catch (ex) {
        alert(ex.message)
    }
}


export const addTodo = (title: Todo['title']) => async (dispatch) => {
    try {
        await axiosWithAuth.post(`/todos`, {
            title
        })
        dispatch(getTodos())
    } catch (ex) {
        alert(ex.message)
    }
}

export const findTodo = (array: Todo[], id: Todo['_id']): Todo => {
    return array.find(element => element._id === id) as Todo
}


