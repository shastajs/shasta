import { Component, PropTypes as RPropTypes } from 'react'
import IPropTypes from 'react-immutable-proptypes'
import bindClass from './lib/bindClass'
import connect from './connect'
import createStore from './createStore'
import createActions from './lib/createActions'
import createReducer from './lib/createReducer'

class ShastaComponent extends Component {
  static propTypes = {
    actions: RPropTypes.object.isRequired
  };
  static connect = connect;
  constructor() {
    super(...arguments)
    this.state = this.constructor.defaultState || {}
    bindClass(this)
  }

  // sugar accessors
  get actions() {
    return this.props.actions
  }
}

const PropTypes = {
  ...RPropTypes,
  ...IPropTypes
}

export {
  ShastaComponent as Component,
  PropTypes,

  // guts
  createReducer,
  createActions,
  createStore
}
