const authToken = (state) => state.auth?.token;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const authSelector = {
  authToken,
  getIsLoggedIn,
};

export default authSelector;
