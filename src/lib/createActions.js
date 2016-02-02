import { createAction } from 'redux-actions'
import mapValues from 'lodash.mapvalues'

// equiv of redux createAction but recursive
export const createActions = (actions) => {
  if (typeof actions === 'string') return createAction(actions)
  if (typeof actions === 'function') return actions
  return mapValues(actions, createActions)
}

export default createActions
