import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middleware/logger'
import rootReducer from './rootReducer'

export default function configureStore (preloadedState) {
  const middlewares = [thunkMiddleware]

  const isDev = process.env.NODE_ENV === 'development'

  if (isDev) {
    middlewares.push(loggerMiddleware)
  }

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]

  let composedEnhancers

  if (isDev) {
    composedEnhancers = composeWithDevTools(...enhancers)
  } else {
    composedEnhancers = middlewareEnhancer
  }

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}
