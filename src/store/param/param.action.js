import { createAction } from '../../utils/reducer/reducer.utils';
import { PARAM_ACTION_TYPES } from './param.types';

export const setCurrentParam = (param) =>
  createAction(PARAM_ACTION_TYPES.SET_CURRENT_PARAM, param);
