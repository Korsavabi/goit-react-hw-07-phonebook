import { createAction } from '@reduxjs/toolkit';
import { FILTER_ITEM } from '../constant';

export const filterInput = createAction(FILTER_ITEM)