
import {
    JIA_COUNT,
    JIAN_COUNT,
    CHENG_COUNT,
    CHU_COUNT,
  } from '@/redux/constant.js'
  
//改变count
export function changeCount_jia(payload) {
    return {
        type: JIA_COUNT,
        payload
    }
}

//异步的actions
export function changeCountAsync_jia(payload,time) {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(changeCount_jia(payload))
        },time)
    }
    
}

export function changeCount_jian(payload) {
    return {
        type: JIAN_COUNT,
        payload
    }
}
export function changeCount_cheng(payload) {
    return {
        type: CHENG_COUNT,
        payload
    }
}
export function changeCount_chu(payload) {
    return {
        type: CHU_COUNT,
        payload
    }
}