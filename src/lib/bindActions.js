import mapValues from 'lodash.mapvalues'

// equiv of redux bindActionCreators but recursive
const bindActionCreators = (actions, dispatch) => {
  if (typeof actions === 'function') {
    return (...args) => dispatch(actions(...args))
  }
  return mapValues(actions, (v) => bindActionCreators(v, dispatch))
}

export default bindActionCreators
