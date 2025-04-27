const initialState = {
    bookings: [],
  };
  
  export const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_BOOKING":
        return { ...state, bookings: [...state.bookings, action.payload] };
      default:
        return state;
    }
  };
  