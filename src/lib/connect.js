import { connect } from 'react-redux'
import resolve from './resolveStoreProps'

const mapStateToProps = (storeProps) => (storeState, ownProps) =>
  resolve(storeProps, storeState, ownProps)

const options = {
  pure: true,
  withRef: true
}

export default (storeProps) => {
  const connector = connect(
    storeProps ? mapStateToProps(storeProps) : null,
    null,
    null,
    options
  )
  return (Component) => {
    Component.storeProps = storeProps
    return connector(Component)
  }
}
