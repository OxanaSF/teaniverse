import { createAction } from '../../utils/reducer/reducer.utils';
import { AUTH_ACTION_TYPES } from './auth.types';


export const setIsLoggedIn = () =>
  createAction(AUTH_ACTION_TYPES.SET_IS_LOGGED_IN, true);



  export const setIsLoggedOut = () =>
  createAction(AUTH_ACTION_TYPES.SET_IS_LOGGED_OUT, false);
