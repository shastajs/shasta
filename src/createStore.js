import { applyMiddleware, compose, createStore } from 'redux'
import { Map, Iterable } from 'immutable'
import thunk from 'redux-thunk'

const devtools = typeof window !== 'undefined' && window.devToolsExtension
  ? window.devToolsExtension()
  : undefined

export default ({
  middleware = [],
  enhancers = [],
  reducer,
  initialState = Map()
}) => {
  if (typeof reducer !== 'function') throw new Error('Invalid reducer option')
  if (!Array.isArray(middleware)) throw new Error('Invalid middleware option')
  if (!Iterable.isIterable(initialState)) throw new Error('Invalid initialState option')
  const applied = applyMiddleware(thunk, ...middleware)

  return createStore(
    reducer,
    initialState,
    compose(applied, devtools, ...enhancers)
  )
}
