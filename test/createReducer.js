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
})
