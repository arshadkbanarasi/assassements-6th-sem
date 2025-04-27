import {
    FETCH_MATCHES_REQUEST,
    FETCH_MATCHES_SUCCESS,
    FETCH_MATCHES_FAILURE
  } from './actions';
  
  const initialState = {
    isLoading: false,
    isError: false,
    footballMatches: [],
  };
  
  const footballMatchesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MATCHES_REQUEST:
        return { ...state, isLoading: true };
      case FETCH_MATCHES_SUCCESS:
        return { ...state, isLoading: false, footballMatches: action.payload };
      case FETCH_MATCHES_FAILURE:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };
  
  export default footballMatchesReducer;
  