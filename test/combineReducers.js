/*global it: true, describe: true */
/*eslint no-console: 0*/

import should from 'should'
import createReducer from '../src/lib/createReducer'
import combineReducers from '../src/lib/combineReducers'
import { Map } from 'immutable'

describe('combineReducers', () => {
  it('should combine and init two immutable reducer functions', () => {
    let firstReducer = createReducer({
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let secondReducer = createReducer({
      otherCounter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let reducer = combineReducers(firstReducer, secondReducer)
    let currState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'init' })
    currState.toJS().should.eql({
      counter: {
        count: 1
      },
      otherCounter: {
        count: 1
      }
    })
  })
  it('should combine and init an immutable reducer and an object', () => {
    let firstReducer = createReducer({
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let secondReducer = {
      increment: (v = 1, action = {}) => {
        console.log(v)
        if (action.type === 'increment') {
          return ++v
        }
        return v
      }
    }
    let reducer = combineReducers(firstReducer, secondReducer)
    let currState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'init' })
    currState.toJS().should.eql({
      counter: {
        count: 1
      },
      increment: 1
    })
  })
  it('should combine and init an immutable reducer and an object from existing state', () => {
    let firstReducer = createReducer({
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let secondReducer = {
      increment: (v = 1, action = {}) => {
        console.log(v)
        if (action.type === 'increment') {
          return ++v
        }
        return v
      }
    }
    let reducer = combineReducers(firstReducer, secondReducer)
    let currState = Map()
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'init' })
    currState.toJS().should.eql({
      counter: {
        count: 1
      },
      increment: 1
    })
  })
  it('should combine two immutable reducer functions', () => {
    let firstReducer = createReducer({
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let secondReducer = createReducer({
      otherCounter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let reducer = combineReducers(firstReducer, secondReducer)
    let currState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'counter.increment' })
    currState = reducer(currState, { type: 'otherCounter.decrement' })
    currState.toJS().should.eql({
      counter: {
        count: 2
      },
      otherCounter: {
        count: 0
      }
    })
  })
  it('should combine an immutable reducer and an object', () => {
    let firstReducer = {
      increment: (v = 1, action = {}) => {
        if (action.type === 'increment') {
          return ++v
        }
        return v
      }
    }
    let secondReducer = createReducer({
      otherCounter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let reducer = combineReducers(firstReducer, secondReducer)
    let currState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'increment' })
    currState = reducer(currState, { type: 'otherCounter.decrement' })
    currState.toJS().should.eql({
      increment: 2,
      otherCounter: {
        count: 0
      }
    })
  })
  it('should an immutable reducer and a plain function', () => {
    let firstReducer = (s = Map(), action = {}) => {
      if (action.type === 'increment') {
        if (s.has('laCuenta')) {
          return s.update('laCuenta', v => ++v)
        } else {
          return s.set('laCuenta', 1)
        }
      }
      return s
    }
    let secondReducer = createReducer({
      otherCounter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let reducer = combineReducers(firstReducer, secondReducer)
    let currState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'increment' })
    currState = reducer(currState, { type: 'increment' })
    currState = reducer(currState, { type: 'otherCounter.decrement' })
    currState.toJS().should.eql({
      laCuenta: 2,
      otherCounter: {
        count: 0
      }
    })
  })
  it('should a plain function and an immutable reducer', () => {
    let firstReducer = (s = Map(), action = {}) => {
      if (action.type === 'increment') {
        if (s.has('laCuenta')) {
          return s.update('laCuenta', v => ++v)
        } else {
          return s.set('laCuenta', 1)
        }
      }
      return s
    }
    let secondReducer = createReducer({
      otherCounter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let reducer = combineReducers(secondReducer, firstReducer)
    let currState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'increment' })
    currState = reducer(currState, { type: 'increment' })
    currState = reducer(currState, { type: 'otherCounter.decrement' })
    currState.toJS().should.eql({
      laCuenta: 2,
      otherCounter: {
        count: 0
      }
    })
  })
})
