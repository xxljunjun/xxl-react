import { combineReducers} from 'redux'

//引入不同的reducer
import count_reducer from './count_reducer.js'
import navBar_reducer from './navBar_reducer.js'
import shop_reducer from './shop_reducer.js'

//汇总所有的reducer变成一个总的reducer
const allReducer = combineReducers({
  count_reducer,
  navBar_reducer,
  shop_reducer
})
export default allReducer