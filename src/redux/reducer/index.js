import { combineReducers } from 'redux';
import filter from './filter';
import todoList from './todoList';
import error from './error';
import loader from './loader';

const rootReducer = combineReducers({
    filter,
    todoList,
    error,
    loader,
})

export default rootReducer;