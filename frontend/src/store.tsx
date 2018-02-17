import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import * as reducers from './reducers'
import routes from './routes'

const {
  reducer: routeReducer,
  middleware: routeMiddleware,
  enhancer: routeEnhancer,
} = routes

const rootReducer = combineReducers({
  location: routeReducer,
  ...reducers,
})

const composeEnhancers = composeWithDevTools({
  name: 'project-template',
})

const initialState = {}

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    routeEnhancer,
    applyMiddleware(thunkMiddleware, routeMiddleware)
  )
)
