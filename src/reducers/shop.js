import {UPDATE_SHOPNUMS} from '@/utils/constant.js'
const initState = {
  shopNums: 2,
};
//reducer是一个纯函数
const shop = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SHOPNUMS:
      return Object.assign({}, state, {
        shopNums:action.payload,
      });
    default:
      return state;
  }
};
export default shop;
