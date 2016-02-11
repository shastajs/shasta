import { applyMiddleware, compose, createStore } from 'redux'
import combineReducers from './lib/combineReducers'
import transformPlugins from './lib/transformPlugins'
import { Map, Iterable } from 'immutable'
import thunk from 'redux-thunk'
import each from 'lodash.foreach'

const identity = v => v

const devtools = typeof window !== 'undefined' && window.devToolsExtension
  ? window.devToolsExtension()
  : identity

const defaultMiddleware = [
  thunk
]

export default ({
  plugins = [],
  middleware = [],
  enhancers = [],
  reducers = [],
  hooks = [],
  initialState = Map()
}) => {
  if (!Array.isArray(reducers)) throw new Error('Invalid reducers option')
  if (!Array.isArray(middleware)) throw new Error('Invalid middleware option')
  if (!Array.isArray(enhancers)) throw new Error('Invalid enhancers option')
  if (!Iterable.isIterable(initialState)) throw new Error('Invalid initialState option')

  // take in the options and reconcile them with the plugins provided
  const pluginValues = transformPlugins(plugins)
  const finalReducers = [
    ...reducers,
    ...pluginValues.reducers
  ]
  const finalMiddleware = [
    ...defaultMiddleware,
    ...middleware,
    ...pluginValues.middleware
  ]
  const finalEnhancers = [
    ...enhancers,
    ...pluginValues.enhancers,
    devtools
  ]
  const finalHooks = [
    ...hooks,
    ...pluginValues.hooks
  ]

  const store = createStore(
    combineReducers(...finalReducers),
    initialState,
    compose(
      applyMiddleware(...finalMiddleware),
      ...finalEnhancers
    )
  )

  store.replaceReducers = (newReducers) => {
    if (!Array.isArray(newReducers)) throw new Error('Invalid newReducers option')
    return store.replaceReducer(
      combineReducers(...newReducers, ...pluginValues.reducers)
    )
  }


  // apply hooks
  each(finalHooks, fn => fn(store))

  return store
}
