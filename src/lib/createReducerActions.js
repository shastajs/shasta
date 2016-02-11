/*eslint no-console: 0*/

import reduce from 'lodash.reduce'
import { createAction } from 'redux-actions'

const createReducerActions = (o, ns) => {
  if (typeof o !== 'object') {
    throw new Error('Passed an invalid reducer config - must be an object')
  }
  return reduce(o, (prev, v, k) => {
    if (k === 'initialState') return prev
    const name = ns ? `${ns}.${k}` : k

    if (typeof v === 'function') {
      prev[k] = createAction(name)
      return prev
    }

    if (typeof v === 'object') {
      prev[k] = createReducerActions(v, name)
      return prev
    }

    return prev
  }, {})
}

export default createReducerActions
