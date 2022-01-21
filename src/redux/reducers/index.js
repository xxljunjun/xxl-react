import { combineReducers} from 'redux'

//引入不同的reducer
import rootReducer from './count.js'
import person from './person.js' 
import shop from './shop.js'

//汇总所有的reducer变成一个总的reducer
const allReducer = combineReducers({
  he:rootReducer,
  she:person,
  shop
})
export default allReducer