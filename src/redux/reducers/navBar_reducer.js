/**
 * 
 * 该文件是用于创建一个为Count组件服务的reduce，reducer的本质就是一个函数
 * reducer函数会接到两个参数，分别为之前的状态（preState）,动作对象（action）
 */

import {
    CHANGE_NAVSTATUS
  } from '@/redux/constant.js'
  const initState = {
    navstatus: false,
  };
  //reducer是一个纯函数
  const navBarReducer = (state = initState, action) => {
    const {type,payload} = action
    switch (type) {
      case CHANGE_NAVSTATUS:
        return Object.assign({}, state, {
          navstatus: payload,
        });
      default:
        return state;
    }
  };
  export default navBarReducer;
  