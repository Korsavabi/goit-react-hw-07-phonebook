import { createAction } from '@reduxjs/toolkit';
import { ADD_ITEM, DELETE_ITEM, SET_ITEMS } from '../constant';

export const addItem = createAction(ADD_ITEM);

export const deleteItem = createAction(DELETE_ITEM);

export const setItem = createAction(SET_ITEMS);