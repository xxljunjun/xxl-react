
import {
    JIA_COUNT,
    JIAN_COUNT,
    CHENG_COUNT,
    CHU_COUNT,
  } from '@/redux/constant.js'
  

//异步的actions
export function changeCountAsync_jia(payload,time) {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(changeCount_jia(payload))
        },time)
    }
    
}

//加
export function changeCount_jia(payload) {
    return {
        type: JIA_COUNT,
        payload
    }
}

//减
export function changeCount_jian(payload) {
    return {
        type: JIAN_COUNT,
        payload
    }
}

//乘
export function changeCount_cheng(payload) {
    return {
        type: CHENG_COUNT,
        payload
    }
}

//除
export function changeCount_chu(payload) {
    return {
        type: CHU_COUNT,
        payload
    }
}