const initState = {
    personArr: [],
  };
  const person = (state = initState, action) => {
    switch (action.type) {
      case "CHANGE_PERSON":
        return Object.assign({}, state, {
          personArr: [action.payload,...state.personArr],
        });
      default:
        return state;
    }
  };
  export default person;
  