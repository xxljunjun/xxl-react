//引入createStore,专门用于创建redux中最为核心的store对象
import { createStore,applyMiddleware,combineReducers} from 'redux'

//引入不同的reducer
import rootReducer from '../reducers'
import person from '../reducers/person.js' 

//使得actions可以是一个函数,用于支持异步的actions
import thunk from 'redux-thunk'

// 引入redux-devtools-extension
//  import { composeWithDevTools} from 'redux-devtools-extension'

//汇总所有的reducer变成一个总的reducer
const allReducer = combineReducers({
    he:rootReducer,
    she:person
})

//暴露store
export default createStore(allReducer,applyMiddleware(thunk))

//配合redux-devtools插件使用
// export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

