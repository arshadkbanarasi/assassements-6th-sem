import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { moviesReducer } from "./movies/moviesReducer";
import { authReducer } from "./auth/authReducer";
import { watchlistReducer } from "./watchlist/watchlistReducer";
import { bookingReducer } from "./booking/bookingReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
  watchlist: watchlistReducer,
  booking: bookingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
