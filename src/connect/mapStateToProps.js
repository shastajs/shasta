import resolve from '../lib/resolveStoreProps'

export default (view) => (storeState, ownProps) => {
  // nothing to do
  if (!view.storeProps) return {}
  return resolve(view.storeProps, storeState, ownProps)
}
