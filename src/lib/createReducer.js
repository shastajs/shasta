import { handleAction } from 'redux-actions'
import reduceReducers from 'reduce-reducers'
import mapValues from 'lodash.mapvalues'
import values from 'lodash.values'
import reduce from 'lodash.reduce'
import filter from 'lodash.filter'
import { Map, Iterable } from 'immutable'

const isFunction = v => typeof v === 'function'
const getInitialState = (o) => {
  if (typeof o.initialState !== 'undefined') return o.initialState
  return reduce(o, (prev, v, k) => {
    if (typeof v === 'object') {
      return prev.set(k, getInitialState(v, k))
    }
    return prev
  }, Map())
}

const createReducer = (o, ns) => {
  // map reducers down to a flat object
  // of functions that handle namespaced actions
  let hadReducer = false
  const reducers = filter(mapValues(o, (v, k) => {
    if (k === 'initialState') return
    let name = ns ? `${ns}.${k}` : k

    if (isFunction(v)) {
      hadReducer = true
      return handleAction(name, v)
    }

    if (typeof v === 'object') {
      return createReducer(v, name)
    }
  }), isFunction)

  if (ns && hadReducer && typeof o.initialState === 'undefined') {
    throw new Error(`Reducer "${ns}" is missing an initialState`)
  }

  const initialState = getInitialState(o)
  if (!Iterable.isIterable(initialState)) {
    throw new Error(`Reducer "${ns || 'root'}" is missing an Immutable initialState`)
  }

  const reducer = reduceReducers(...values(reducers))

  return (state = initialState, action = {}) => {
    const path = ns ? ns.split('.') : undefined
    const currState = path ? state.getIn(path) : state
    const nodeState = typeof currState === 'undefined'
      ? initialState
      : currState

    if (typeof ns === 'undefined' || !hadReducer) {
      return reducer(nodeState, action)
    }

    return state.setIn(path, reducer(nodeState, action))
  }
}

export default createReducer
