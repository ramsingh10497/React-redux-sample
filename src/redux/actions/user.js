import userSlice from "../user";

const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const { loginSuccess } = userSlice.actions || {};
      // const res = await api.post('/api/auth/login/', { username, password })
      return dispatch(loginSuccess(username));
    } catch (error) {
      console.log(error);
    }
  };

const logout = () => async (dispatch) => {
  try {
    const { logoutSuccess } = userSlice.actions || {};
    // const res = await api.post('/api/auth/logout/', { username })
    return dispatch(logoutSuccess());
  } catch (error) {
    console.log(error);
  }
};

export { login, logout };
