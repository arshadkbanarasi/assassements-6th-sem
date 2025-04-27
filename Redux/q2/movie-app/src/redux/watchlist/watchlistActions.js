export const addToWatchlist = (movie) => ({
    type: "ADD_TO_WATCHLIST",
    payload: movie,
  });
  
  export const removeFromWatchlist = (id) => ({
    type: "REMOVE_FROM_WATCHLIST",
    payload: id,
  });
  