import { combineReducers } from 'redux';
import filter from './filter';
import todoList from './todoList';
import errorReducer from './error';
import loader from './loader';

const rootReducer = combineReducers({
    filter,
    todoList,
    errorReducer,
    loader,
})

export default rootReducer;