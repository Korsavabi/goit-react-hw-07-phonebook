import { createReducer } from '@reduxjs/toolkit';
import { FILTER_ITEM } from '../constant';

const initialState = '';

export default createReducer(initialState, {
    [FILTER_ITEM]: (state, action) => action.payload,
})