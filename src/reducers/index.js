const initState = {
  navstatus: false,
  count: 0,
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "JIA_COUNT":
      return Object.assign({}, state, {
        count: state.count + action.payload,
      });
    case "JIAN_COUNT":
      return Object.assign({}, state, {
        count: state.count - action.payload,
      });
    case "CHENG_COUNT":
      return Object.assign({}, state, {
        count: state.count * action.payload,
      });
    case "CHU_COUNT":
      return Object.assign({}, state, {
        count: state.count / action.payload,
      });
    case "CHANGE_NAVSTATUS":
      return Object.assign({}, state, {
        navstatus: action.payload,
      });
    default:
      return state;
  }
};
export default rootReducer;
