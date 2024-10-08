import {UPDATE_SHOPNUMS} from '@/redux/constant.js'
const initState = {
  shopNums: 2,
};
//reducer是一个纯函数
const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SHOPNUMS:
      return Object.assign({}, state, {
        shopNums:action.payload,
      });
    default:
      return state;
  }
};
export default shopReducer;
