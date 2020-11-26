import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { ownLogger } from './logger';
import thunk from 'redux-thunk';

const middleWares =[ownLogger, thunk];
const store = configureStore({
    reducer: rootReducer,
    middleware: middleWares
})
export default store;


