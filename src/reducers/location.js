export default function locationReducer(state = "Seattle,WA", action) {
  //   return Object.assign({}, state, { location: action.payload });

  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
