import resolve from '../lib/resolveStoreProps'

export default (view) => (storeState, ownProps) => {
  if (!view.storeProps) return {} // nothing to do
  return resolve(view.storeProps, storeState, ownProps)
}
