//引入UI组件
import studyReactReduxUI from '@/pages/studyReactRedux/studyReactRedux.js'
import {changeCount_jia,changeCount_jian,changeCount_cheng,changeCount_chu,changeCountAsync_jia} from '@/actions/index.js'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

/*
    1、mapStateToProps函数返回一个对象
    2、返回的对象的可以就是传递给UI组件的props的key,value就作为传递给UI的props的value
    3、mapStateToProps用于传递状态
*/
const mapStateToProps = (state)=>{
    console.log('redux所管理的数据',state)
    return {
        count:state.count
    }
}

/*
    1、mapDispatchToProps函数返回一个对象
    2、mapDispatchToProps函数返回的对象中的key就作为UI组件中的props的key,value就作为传递给UI组件中props的value
    3、mapDispatchToProps函数用于传递操作状态的方法
*/
const mapDispatchToProps = (dispatch)=>{
    return {
        jia:number=>dispatch(changeCount_jia(number)),
        jian:number=>dispatch(changeCount_jian(number)),
        cheng:number=>dispatch(changeCount_cheng(number)),
        chu:number=>dispatch(changeCount_chu(number)),
        asyncjia:(number,time) => dispatch(changeCountAsync_jia(number,time))
    }
}

//使用connect()()创建并暴露一个容器组件
export default connect(mapStateToProps,mapDispatchToProps)(studyReactReduxUI)


//简化写法
// export default connect(mapStateToProps,{
//     jia:changeCount_jia,
//     jian:changeCount_jian,
//     cheng:changeCount_cheng,
//     chu:changeCount_chu,
//     asyncjia:changeCountAsync_jia
// })(studyReactReduxUI)