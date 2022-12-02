import { createSelector } from 'reselect';

const selectAuthReducer = (state) => state.auth;

export const selectIsLoggedIn = createSelector(
  [selectAuthReducer],
  (auth) => auth.isLoggedIn
);


export const selectIsLoggedOut = createSelector(
  [selectAuthReducer],
  (auth) => auth.isLoggedOut
);

