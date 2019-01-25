export default function getStarCharacters() {
  return function getStarCharactersThunk(dispatch, getState) {
    const { heroes } = getState();
    // if heroes go and get heroes

    dispatch({ type: "SET_CHARACTERS", payload: "DATA PAYLOAD HERE" });
  };
}
