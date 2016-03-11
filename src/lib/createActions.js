import { createAction } from 'redux-actions'
import mapValues from 'lodash.mapvalues'

// equiv of redux createAction but recursive
export const createActions = (actions, dispatch) => {
  if (typeof dispatch !== 'function') throw new Error('Missing dispatch argument in createActions')

  // map string to a fn and pass back through
  if (typeof actions === 'string') return createActions(createAction(actions), dispatch)

  // wrap function in a dispatch
  if (typeof actions === 'function') return (...args) => {
    const action = actions(...args)
    dispatch(action)
    return action
  }

  // iterate through objects and do mapping
  return mapValues(actions, (actions) =>
    createActions(actions, dispatch)
  )
}

export default createActions
