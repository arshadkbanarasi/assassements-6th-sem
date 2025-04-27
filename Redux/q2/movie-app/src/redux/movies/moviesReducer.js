const initialState = {
    movies: [],
    isLoading: false,
    isError: false,
  };
  
  export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "MOVIES_REQUEST":
        return { ...state, isLoading: true, isError: false };
      case "MOVIES_SUCCESS":
        return { ...state, isLoading: false, movies: action.payload };
      case "MOVIES_FAILURE":
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };
  