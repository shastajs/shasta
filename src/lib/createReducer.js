/*eslint no-console: 0*/
import { combineReducers } from 'redux-immutablejs'
import { handleAction } from 'redux-actions'
import mapValues from 'lodash.mapvalues'
import reduce from 'lodash.reduce'
import { Map, Iterable } from 'immutable'

const getInitialState = (o) => {
  if (typeof o.initialState !== 'undefined') {
    return o.initialState
  }

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
  const reducers = mapValues(o, (v, k) => {
    if (k === 'initialState') return
    let name = ns ? `${ns}.${k}` : k

    if (typeof v === 'function') {
      hadReducer = true
      return handleAction(name, v)
    }

    if (typeof v === 'object') {
      return createReducer(v, name)
    }
  })

  if (hadReducer && typeof o.initialState === 'undefined') {
    throw new Error(`Reducer "${ns || 'root'}" is missing an initialState`)
  }

  const initialState = getInitialState(o)
  if (!Iterable.isIterable(initialState)) {
    throw new Error(`Reducer "${ns || 'root'}" is missing an Immutable initialState`)
  }

  const combined = combineReducers(reducers)
  return (state = initialState, action = {}) =>
    combined(state, action)
}

export default createReducer
