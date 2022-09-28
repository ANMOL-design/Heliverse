const initialState = {
  card: [],
};

export const cardReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARD_DETAILS": {
      return {
        ...state,
        card: action.payload,
      };
    }
    default:
      return state;
  }
};
