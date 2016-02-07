/*global it: true, describe: true */
/*eslint no-console: 0*/

import should from 'should'
import createReducer from '../src/lib/createReducer'
import { Map, List } from 'immutable'

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
  it('shouldnt default node state', () => {
    let reducer = createReducer({
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let currState = Map({
      test: 123
    })
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'counter.increment' })
    currState.toJS().should.eql({
      test: 123,
      counter: {
        count: 2
      }
    })
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
    currState.toJS().should.eql({
      counter: {
        count: 3
      },
      test: 123
    })
  })
  it('should error on non-container initialState', (done) => {
    try {
      createReducer({
        initialState: Map({
          counter: {
            count: 2
          }
        }),
        counter: {}
      })
    } catch (err) {
      should.exist(err)
      return done()
    }
    throw new Error('Did not throw!')
  })
  it('should error on nested non-container initialState', (done) => {
    try {
      createReducer({
        counter: {
          initialState: Map({
            count: 2
          })
        }
      })
    } catch (err) {
      should.exist(err)
      return done()
    }
    throw new Error('Did not throw!')
  })
  it('should error on conflicting parent initialState', (done) => {
    try {
      createReducer({
        initialState: Map({
          ay: 0,
          counter: {
            count: 2
          }
        }),
        doSomething: (v) => v.update('ay', v => ++v),
        counter: {
          initialState: Map({ count: 1 }),
          increment: (v) => v.update('count', v => ++v),
          decrement: (v) => v.update('count', v => --v)
        }
      })
    } catch (err) {
      should.exist(err)
      return done()
    }
    throw new Error('Did not throw!')
  })
  it('should error on non-map parent initialState', (done) => {
    try {
      createReducer({
        initialState: List([ 1, 2, 3 ]),
        doSomething: (v) => v.update('ay', v => ++v),
        counter: {
          initialState: Map({ count: 1 }),
          increment: (v) => v.update('count', v => ++v),
          decrement: (v) => v.update('count', v => --v)
        }
      })
    } catch (err) {
      should.exist(err)
      return done()
    }
    throw new Error('Did not throw!')
  })
  it('should error with nested non-immutable state', (done) => {
    let reducer = createReducer({
      initialState: Map({
        ay: 0
      }),
      doSomething: (v) => v.update('ay', v => ++v),
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let currState = Map({
      ay: 0,
      counter: {
        count: 0
      }
    })
    should.exist(reducer)
    reducer.should.be.a.function
    try {
      currState = reducer(currState, { type: 'counter.increment' }) // count: 1
    } catch (err) {
      should.exist(err)
      return done()
    }
    throw new Error('Did not throw!')
  })
  it('should error with root non-immutable state', (done) => {
    let reducer = createReducer({
      initialState: Map({
        ay: 0
      }),
      doSomething: (v) => v.update('ay', v => ++v),
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let currState = {
      ay: 0,
      counter: Map({
        count: 0
      })
    }
    should.exist(reducer)
    reducer.should.be.a.function
    try {
      currState = reducer(currState, { type: 'counter.increment' }) // count: 1
    } catch (err) {
      should.exist(err)
      return done()
    }
    throw new Error('Did not throw!')
  })
  it('should work with nested state', () => {
    let reducer = createReducer({
      initialState: Map({
        ay: 0
      }),
      doSomething: (v) => v.update('ay', v => ++v),
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let currState = Map({
      ay: 0,
      counter: Map({
        count: 0
      })
    })
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'counter.increment' }) // count: 1
    currState = reducer(currState, { type: 'counter.increment' }) // count: 2
    currState = reducer(currState, { type: 'doSomething' }) // ay: 1
    currState = reducer(currState, { type: 'counter.increment' }) // count: 3
    currState = reducer(currState, { type: 'counter.decrement' }) // count: 2
    currState = reducer(currState, { type: 'doSomething' }) // ay: 2
    currState.toJS().should.eql({
      counter: {
        count: 2
      },
      ay: 2
    })
  })
  it('should work with nested initialState', () => {
    let reducer = createReducer({
      initialState: Map({
        ay: 0
      }),
      doSomething: (v) => v.update('ay', v => ++v),
      counter: {
        initialState: Map({ count: 1 }),
        increment: (v) => v.update('count', v => ++v),
        decrement: (v) => v.update('count', v => --v)
      }
    })
    let currState = undefined
    should.exist(reducer)
    reducer.should.be.a.function
    currState = reducer(currState, { type: 'counter.increment' }) // count: 2
    currState = reducer(currState, { type: 'counter.increment' }) // count: 3
    currState = reducer(currState, { type: 'doSomething' }) // ay: 1
    currState = reducer(currState, { type: 'counter.increment' }) // count: 4
    currState = reducer(currState, { type: 'counter.decrement' }) // count: 3
    currState = reducer(currState, { type: 'doSomething' }) // ay: 2
    currState.toJS().should.eql({
      counter: {
        count: 3
      },
      ay: 2
    })
  })
})
