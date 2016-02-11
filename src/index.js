import { Component, PropTypes as RPropTypes } from 'react'
import { Provider } from 'react-redux'
import IPropTypes from 'react-immutable-proptypes'
import bindClass from './lib/bindClass'
import connect from './connect'
import createStore from './createStore'
import createActions from './lib/createActions'
import createReducer from './lib/createReducer'
import createReducerActions from './lib/createReducerActions'
import combineReducers from './lib/combineReducers'

class ShastaComponent extends Component {
  static propTypes = {
    actions: RPropTypes.object.isRequired
  };
  static connect = connect;
  static defaultState = {};
  constructor() {
    super(...arguments)
    this.state = {
      ...this.constructor.defaultState,
      ...this.state
    }
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
  Provider,
  combineReducers,
  createReducer,
  createReducerActions,
  createActions,
  createStore
}
