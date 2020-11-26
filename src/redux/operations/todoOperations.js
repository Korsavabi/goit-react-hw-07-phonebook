import axios from 'axios';

import { loaderOn, loaderOff } from '../action/loader';
import { setError } from '../action/error';

import { setItem } from '../action/todoList';

const options = {
    header: { 'Content-Type': 'applicarion/json' }
}

export const getTodoOperation = () => async (dispatch) => {
    try {
        dispatch(loaderOn())
        const result = await axios.get('http://localhost:5000/contacts')
        dispatch(setItem(result.data))
    } catch (error) {
        dispatch(setError('Somethong went wrong, try later'))
    }
    finally {
        dispatch(loaderOff())
    }
}
export const postTodoOperation = (todo) => async (dispatch) => {
    try {
        dispatch(loaderOn())
         await axios.post('http://localhost:5000/contacts', todo, options)
    } catch (error) {
        dispatch(setError('Somethong went wrong, try later'))
    }
    finally {
        dispatch(loaderOff())
    }
}
export const deleteTodoOperation = (id) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        await axios.delete(`http://localhost:5000/contacts/${id}`)
    } catch (error) {
        dispatch(setError('Somethong went wrong, try later'))
    }
    finally {
        dispatch(loaderOff())
    }
}