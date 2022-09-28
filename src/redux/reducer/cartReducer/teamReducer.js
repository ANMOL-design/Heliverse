const initialState = {
  myteam: [],
};
let team = [];
export const teamReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_TEAM": {
      
      if (state.myteam.length < 1) {
        console.log(team);
        team.push(action.payload);
        return {
          ...state,
          myteam: team,
        };
      } else {
        let isUser = state.myteam.find((item) => item.id === action.payload.id);
        let isDomain = state.myteam.find(
          (item) => item.domain === action.payload.domain
        );
        console.log(isUser, isDomain);
        if (isUser || isDomain) {
          alert("User of this domain or ID is already exist.");
          return state;
        } else {
          console.log(team);
          team.push(action.payload);
          return {
            ...state,
            myteam: team,
          };
        }
      }
    }
    default:
      return state;
  }
};
