export const login = (payload) => (dispatch) => {
    dispatch({ type: "LOGIN_SUCCESS", payload });
  };
  
  export const logout = () => (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
  