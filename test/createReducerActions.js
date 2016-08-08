/*global it: true, describe: true */
/*eslint no-console: 0*/

import should from 'should'
import createReducerActions from '../src/lib/createReducerActions'
import { Map } from 'immutable'

describe('createReducerActions', () => {
  it('should create actions for a flat reducer', () => {
    let reducer = {
      initialState: Map({ count: 1 }),
      increment: (v) => v.update('count', v => ++v),
      decrement: (v) => v.update('count', v => --v)
    }
    let actions = createReducerActions(reducer)
    should.exist(actions.increment)
    should.exist(actions.decrement)
    actions.increment().should.eql({ type: 'increment' })
    actions.decrement().should.eql({ type: 'decrement' })
    actions.increment(1).should.eql({ type: 'increment', payload: 1 })
    actions.decrement(1).should.eql({ type: 'decrement', payload: 1 })
  })
  it('should create actions for a nested reducer', () => {
    let reducer = {
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    }
    let actions = createReducerActions(reducer)
    should.exist(actions.counter.increment)
    should.exist(actions.counter.decrement)
    actions.counter.increment().should.eql({ type: 'counter.increment' })
    actions.counter.decrement().should.eql({ type: 'counter.decrement' })
    actions.counter.increment(1).should.eql({ type: 'counter.increment', payload: 1 })
    actions.counter.decrement(1).should.eql({ type: 'counter.decrement', payload: 1 })
  })
  it('should create actions for a really nested reducer', () => {
    let reducer = {
      yo: {
        counter: {
          initialState: Map({ count: 1 }),
          increment: (v) => v.update('count', v => ++v),
          decrement: (v) => v.update('count', v => --v)
        }
      }
    }
    let actions = createReducerActions(reducer)
    should.exist(actions.yo.counter.increment)
    should.exist(actions.yo.counter.decrement)
    actions.yo.counter.increment().should.eql({ type: 'yo.counter.increment' })
    actions.yo.counter.decrement().should.eql({ type: 'yo.counter.decrement' })
    actions.yo.counter.increment(1).should.eql({ type: 'yo.counter.increment', payload: 1 })
    actions.yo.counter.decrement(1).should.eql({ type: 'yo.counter.decrement', payload: 1 })
  })
})
