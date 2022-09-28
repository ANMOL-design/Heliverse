import data from "./../../../assets/heliverse_mock_data.json";

export const GetCards = () =>  (dispatch) => {
  dispatch({ type: "SET_CARD_DETAILS", payload: data });
};
