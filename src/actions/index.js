import store from '@/store/index.js'
//该文件统一控制actions中的dispatch分发

//改变count
export function changeCount(payload){
    store.dispatch({
        type:'CHANGE_COUNT',
        payload
    })
}

//改变导航栏状态
export function changeNavstatus(payload){
    store.dispatch({
        type:'CHANGE_NAVSTATUS',
        payload
    })
}