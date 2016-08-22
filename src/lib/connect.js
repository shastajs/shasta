import { connect } from 'react-redux'
import resolve from './resolveStoreProps'

const mapStateToProps = (storeProps) => (storeState, ownProps) =>
  resolve(storeProps, storeState, ownProps)

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps)

const options = {
  pure: true,
  withRef: true
}

export default (storeProps, opts) => {
  const connector = connect(
    storeProps ? mapStateToProps(storeProps) : null,
    null,
    mergeProps,
    { ...options, ...opts }
  )
  return (Component) => {
    Component.storeProps = storeProps
    return connector(Component)
  }
}
