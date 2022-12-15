export const selectCurrentUser = (state) => state.user.currentUser;

export const selectCurrentUserName = (state) => state.user.currentUser?.email
