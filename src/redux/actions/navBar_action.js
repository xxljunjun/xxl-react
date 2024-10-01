import {
    CHANGE_NAVSTATUS,
  } from '@/redux/constant.js'


//改变导航栏状态
export function changeNavstatus(payload) {
    return {
        type: CHANGE_NAVSTATUS,
        payload
    }
}