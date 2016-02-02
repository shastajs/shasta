import bindActions from '../lib/bindActions'

export default (creators = {}) => (dispatch) => ({
  actions: bindActions(creators, dispatch)
})
