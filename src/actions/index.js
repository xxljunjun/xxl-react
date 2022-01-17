
//改变count
export function changeCount_jia(payload) {
    return {
        type: 'JIA_COUNT',
        payload
    }
}
export function changeCount_jian(payload) {
    return {
        type: 'JIAN_COUNT',
        payload
    }
}
export function changeCount_cheng(payload) {
    return {
        type: 'CHENG_COUNT',
        payload
    }
}
export function changeCount_chu(payload) {
    return {
        type: 'CHU_COUNT',
        payload
    }
}

//改变导航栏状态
export function changeNavstatus(payload) {
    return {
        type: 'CHANGE_NAVSTATUS',
        payload
    }
}