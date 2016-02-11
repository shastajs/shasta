/*global it: true, describe: true */
/*eslint no-console: 0*/

import should from 'should'
import * as shasta from '../src'

describe('shasta', () => {
  it('should export the right stuff', () => {
    should.exist(shasta.Component, 'Component')
    should.exist(shasta.PropTypes, 'PropTypes')
    should.exist(shasta.Provider, 'Provider')
    should.exist(shasta.createReducer, 'createReducer')
    should.exist(shasta.combineReducers, 'combineReducers')
    should.exist(shasta.createActions, 'createActions')
    should.exist(shasta.createStore, 'createStore')
  })
})
