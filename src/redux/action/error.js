import {RESET_ERROR, SET_ERROR} from '../constant';
import { createAction } from '@reduxjs/toolkit';

export const setError = createAction(SET_ERROR);

export const resetError = createAction(RESET_ERROR);