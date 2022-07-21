import thunk from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux'
// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducer Imports
import user from '../features/user/userSlice'

const rootReducer = combineReducers({
  user
})

// ** init middleware
const middleware = [thunk]

// ** Create store
const store = createStore(rootReducer,(applyMiddleware(...middleware)))

export { store }
