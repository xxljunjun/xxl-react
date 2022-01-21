//引入createStore,专门用于创建redux中最为核心的store对象
import { createStore,applyMiddleware} from 'redux'

//引入总的reducers
import allReducer from '@/redux/reducers/index.js'

//使得actions可以是一个函数,用于支持异步的actions
import thunk from 'redux-thunk'

// 引入redux-devtools-extension
//  import { composeWithDevTools} from 'redux-devtools-extension'

//暴露store
export default createStore(allReducer,applyMiddleware(thunk))

//配合redux-devtools插件使用
// export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

