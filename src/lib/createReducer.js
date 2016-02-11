import { handleAction } from 'redux-actions'
import reduceReducers from 'reduce-reducers'
import mapValues from 'lodash.mapvalues'
import values from 'lodash.values'
import reduce from 'lodash.reduce'
import filter from 'lodash.filter'
import { Map, Iterable } from 'immutable'

// terminology:
// container - an object that contains initialState + reducer functions
// initialState - the default state of a node and its children

const isFunction = v => typeof v === 'function'
const getInitialState = (o, ns) => {
  return reduce(o, (prev, v, k) => {
    if (k === 'initialState') return prev
    const name = ns ? `${ns}.${k}` : k

    if (typeof v === 'object') {
      if (!Map.isMap(prev)) {
        throw new Error(`Reducer "${ns || 'root'}" has a non-map initialState, so it can't have children`)
      }
      if (typeof prev.get(k) !== 'undefined') {
        throw new Error(`Reducer "${ns || 'root'}" has an initialState conflict with it's parent over "${k}"`)
      }
      return prev.set(k, getInitialState(v, name))
    }
    return prev
  }, o.initialState || Map())
}

const createReducerNode = ({ name, statePath, reducer, initialState }) =>
  (state, action = {}) => {
    // if we are the reducer container, pass them our cherry-picked state
    // otherwise pass down the full state to the next container
    const currNodeState = (statePath ? state.getIn(statePath) : state) || initialState
    if (!Iterable.isIterable(currNodeState)) {
      throw new Error(`Reducer "${name || 'root'}" was given a non-Immutable state!`)
    }
    const nextNodeState = reducer(currNodeState, action)
    if (!Iterable.isIterable(nextNodeState)) {
      throw new Error(`Reducer "${name || 'root'}" returned a non-Immutable state!`)
    }
    const nextRootState = statePath ? state.setIn(statePath, nextNodeState) : nextNodeState

    return nextRootState
  }

// recursively map reducers object to an
// array of reducers that handle namespaced actions
const createReducers = (o, parentName) => {
  let hadReducers = false
  const reducers = filter(mapValues(o, (v, k) => {
    if (k === 'initialState') return
    const name = parentName ? `${parentName}.${k}` : k

    if (isFunction(v)) {
      hadReducers = true
      return handleAction(name, v)
    }

    if (typeof v === 'object') {
      return createReducer(v, name)
    }
  }), isFunction)

  return {
    name: parentName,
    isContainer: hadReducers,
    reducers: reducers
  }
}

const createReducer = (o, parentName) => {
  const { reducers, isContainer, name } = createReducers(o, parentName)
  if (isContainer && typeof o.initialState === 'undefined') {
    throw new Error(`Reducer "${name || 'root'}" is missing an initialState`)
  }
  if (!isContainer && typeof o.initialState !== 'undefined') {
    throw new Error(`Reducer "${name || 'root'}" has no reducers, so it can't specify an initialState`)
  }
  const initialState = getInitialState(o)
  if (!Iterable.isIterable(initialState)) {
    throw new Error(`Reducer "${name || 'root'}" is missing an Immutable initialState`)
  }

  const reducer = reduceReducers(...values(reducers))
  const statePath = name && isContainer ? name.split('.') : undefined
  return createReducerNode({
    name: name,
    initialState: initialState,
    reducer: reducer,
    statePath: statePath
  })
}

export default createReducer
