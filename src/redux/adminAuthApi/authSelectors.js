const authToken = (state) => state.auth?.token;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getIsRefreshing = (state) => state.auth.isRefreshing;

const authSelector = {
  authToken,
  getIsLoggedIn,
  getIsRefreshing,
};

export default authSelector;
