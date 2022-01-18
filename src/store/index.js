//
import { createStore,applyMiddleware,combineReducers} from 'redux'
import rootReducer from '../reducers'
import person from '../reducers/person.js'

//使得actions可以是一个函数
import thunk from 'redux-thunk'
const allReducer = combineReducers({
    he:rootReducer,
    she:person
})

export default createStore(allReducer,applyMiddleware(thunk))

