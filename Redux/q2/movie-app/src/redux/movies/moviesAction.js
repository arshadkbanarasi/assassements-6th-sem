import axios from "axios";

export const fetchMovies = (query) => async (dispatch) => {
  dispatch({ type: "MOVIES_REQUEST" });
  try {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`);
    dispatch({ type: "MOVIES_SUCCESS", payload: res.data.Search || [] });
  } catch (error) {
    dispatch({ type: "MOVIES_FAILURE" });
  }
};
