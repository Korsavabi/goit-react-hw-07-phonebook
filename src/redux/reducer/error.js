import {createReducer} from '@reduxjs/toolkit';
import {SET_ERROR, RESET_ERROR} from '../constant';

const initialState = '';

export default createReducer(initialState, {
    [SET_ERROR]: (state, action) => action.payload,

    [RESET_ERROR]: (state, action) => initialState
})