import {createReducer} from '@reduxjs/toolkit';
import {LOADER_OFF, LOADER_ON} from '../constant';

const initialState = false;

export default createReducer(initialState,{
    [LOADER_ON]: (state, action) => true,
    [LOADER_OFF]: (state, action) => initialState
})