const authUser = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_AUTH_USER':
      return action.user;
    case 'USER_SIGN_OUT':
      return {};
    default:
      return state;
  }
};

export default authUser;
