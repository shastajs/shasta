/*global it: true, describe: true */
/*eslint no-console: 0*/

import should from 'should'
import createReducer from '../src/lib/createReducer'
import { Map } from 'immutable'

describe('createReducer', () => {
  it('should combine a single reducer', () => {
    let reducer = createReducer({
      initialState: Map({ count: 1 }),
      increment: (v) => v.update('count', v => ++v),
      decrement: (v) => v.update('count', v => --v)
    })
    let initialState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    reducer(initialState, { type: 'increment' }).get('count').should.equal(2)
    reducer(initialState, { type: 'decrement' }).get('count').should.equal(0)
  })
  it('should combine a nested reducer', () => {
    let reducer = createReducer({
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let initialState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    reducer(initialState, { type: 'counter.increment' }).getIn([ 'counter', 'count' ]).should.equal(2)
    reducer(initialState, { type: 'counter.decrement' }).getIn([ 'counter', 'count' ]).should.equal(0)
  })
  it('should combine a really nested reducer', () => {
    let reducer = createReducer({
      another: {
        counter: {
          initialState: Map({ count: 1 }),
          increment: (v) => v.update('count', v => ++v),
          decrement: (v) => v.update('count', v => --v)
        }
      }
    })
    let initialState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    reducer(initialState, { type: 'another.counter.increment' }).getIn([ 'another', 'counter', 'count' ]).should.equal(2)
    reducer(initialState, { type: 'another.counter.decrement' }).getIn([ 'another', 'counter', 'count' ]).should.equal(0)
  })
  it('should combine a really really nested reducer', () => {
    let reducer = createReducer({
      another: {
        another: {
          another: {
            counter: {
              initialState: Map({ count: 1 }),
              increment: (v) => v.update('count', v => ++v),
              decrement: (v) => v.update('count', v => --v)
            }
          }
        }
      }
    })
    let initialState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    reducer(initialState, { type: 'another.another.another.counter.increment' }).getIn([ 'another', 'another', 'another', 'counter', 'count' ]).should.equal(2)
    reducer(initialState, { type: 'another.another.another.counter.decrement' }).getIn([ 'another', 'another', 'another', 'counter', 'count' ]).should.equal(0)
  })
  it('should work with empty root state', () => {
    let reducer = createReducer({
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let initialState = Map()
    should.exist(reducer)
    reducer.should.be.a.function
    reducer(initialState, { type: 'counter.increment' }).getIn([ 'counter', 'count' ]).should.equal(2)
    reducer(initialState, { type: 'counter.decrement' }).getIn([ 'counter', 'count' ]).should.equal(0)
  })
  it('shouldnt mess up root state', () => {
    let reducer = createReducer({
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let initialState = Map({
      test: 123
    })
    should.exist(reducer)
    reducer.should.be.a.function
    reducer(initialState, { type: 'counter.increment' }).get('test').should.equal(123)
  })
  it('should maintain state changes', () => {
    let reducer = createReducer({
      counter: {
        initialState: Map({ count: 0 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let initialState = Map({
      test: 123
    })
    let currState = initialState
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'counter.increment' })
    currState = reducer(currState, { type: 'dont.respond.hehe' })
    currState = reducer(currState, { type: 'counter.increment' })
    currState = reducer(currState, { type: 'counter.increment' })
    currState.getIn([ 'counter', 'count' ]).should.equal(3)
    currState.get('test').should.equal(123)
  })
  it.skip('should inherit root state', () => {
    let reducer = createReducer({
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let initialState = Map({ count: 2 })
    should.exist(reducer)
    reducer.should.be.a.function
    reducer(initialState, { type: 'counter.increment' }).getIn([ 'counter', 'count' ]).should.equal(3)
    reducer(initialState, { type: 'counter.decrement' }).getIn([ 'counter', 'count' ]).should.equal(1)
  })
})
