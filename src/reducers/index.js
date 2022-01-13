const initState = {
  count: 0,
  myName: "廖军军",
  myAge: 22,
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_COUNT":
      return Object.assign({}, state, {
        count: action.data,
      });

    default:
      return state;
  }
};
export default rootReducer;
