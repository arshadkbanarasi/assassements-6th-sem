const initialState = {
    isAuth: false,
    token: "",
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return { ...state, isAuth: true, token: action.payload };
      case "LOGOUT":
        return { ...state, isAuth: false, token: "" };
      default:
        return state;
    }
  };
  