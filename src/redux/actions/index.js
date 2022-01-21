import store from '@/redux/store/index.js'
import {
    JIA_COUNT,
    JIAN_COUNT,
    CHENG_COUNT,
    CHU_COUNT,
    CHANGE_NAVSTATUS,
    CHANGE_PERSON,
    UPDATE_SHOPNUMS
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
    return ()=>{
        setTimeout(()=>{
            store.dispatch(changeCount_jia(payload))
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

//改变导航栏状态
export function changeNavstatus(payload) {
    return {
        type: CHANGE_NAVSTATUS,
        payload
    }
}

//改变person数组里的成员
export function changePerson(payload) {
    return {
        type: CHANGE_PERSON,
        payload
    }
}

export function updateShopnums(payload) {
    return {
        type: UPDATE_SHOPNUMS,
        payload
    }
}