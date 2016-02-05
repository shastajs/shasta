import { applyMiddleware, compose, createStore } from 'redux'
import { Map, Iterable } from 'immutable'
import thunk from 'redux-thunk'

const identity = v => v

const devtools = typeof window !== 'undefined' && window.devToolsExtension
  ? window.devToolsExtension()
  : identity

export default ({
  middleware = [],
  enhancers = [],
  reducer = identity,
  initialState = Map()
}) => {
  if (typeof reducer !== 'function') throw new Error('Invalid reducer option')
  if (!Array.isArray(middleware)) throw new Error('Invalid middleware option')
  if (!Array.isArray(enhancers)) throw new Error('Invalid enhancers option')
  if (!Iterable.isIterable(initialState)) throw new Error('Invalid initialState option')

  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk, ...middleware),
      devtools,
      ...enhancers
    )
  )
}
