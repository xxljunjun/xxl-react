import {CHANGE_PERSON} from '@/redux/constant.js'
const initState = {
  personArr: [],
};
//reducer是一个纯函数
const person = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_PERSON:
      return Object.assign({}, state, {
        personArr: [action.payload, ...state.personArr],
      });
    default:
      return state;
  }
};
export default person;
