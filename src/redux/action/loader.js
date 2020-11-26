import { createAction } from '@reduxjs/toolkit';
import {LOADER_OFF, LOADER_ON} from '../constant';

export const loaderOn = createAction(LOADER_ON);
export const loaderOff = createAction(LOADER_OFF);