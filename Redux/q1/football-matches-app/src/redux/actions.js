import axios from "axios";

export const FETCH_MATCHES_REQUEST = 'FETCH_MATCHES_REQUEST';
export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const FETCH_MATCHES_FAILURE = 'FETCH_MATCHES_FAILURE';

export const fetchMatchesRequest = () => ({ type: FETCH_MATCHES_REQUEST });
export const fetchMatchesSuccess = (matches) => ({ type: FETCH_MATCHES_SUCCESS, payload: matches });
export const fetchMatchesFailure = (error) => ({ type: FETCH_MATCHES_FAILURE, payload: error });

export const fetchMatches = () => {
  return (dispatch) => {
    dispatch(fetchMatchesRequest());
    axios
      .get('https://jsonmock.hackerrank.com/api/football_matches?page=2')
      .then(response => {
        dispatch(fetchMatchesSuccess(response.data.data));
      })
      .catch(error => {
        dispatch(fetchMatchesFailure(error.message));
      });
  };
};
