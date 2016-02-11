/*global it: true, describe: true */
/*eslint no-console: 0*/

import should from 'should'
import createActions from '../src/lib/createActions'

describe('createActions', () => {
  it('should create from a flat string object', () => {
    const actions = createActions({
      one: 'one',
      two: 'two'
    })
    should.exist(actions.one)
    should.exist(actions.two)

    actions.one(1).should.eql({ type: 'one', payload: 1 })
    actions.two(2).should.eql({ type: 'two', payload: 2 })
  })
  it('should create from a nested string object', () => {
    const actions = createActions({
      one: {
        half: 'one'
      },
      two: {
        half: 'two'
      }
    })
    should.exist(actions.one.half)
    should.exist(actions.two.half)

    actions.one.half(1).should.eql({ type: 'one', payload: 1 })
    actions.two.half(2).should.eql({ type: 'two', payload: 2 })
  })

  it('should create from a flat function object', () => {
    const actions = createActions({
      one: () => ({}),
      two: () => ({})
    })
    should.exist(actions.one)
    should.exist(actions.two)

    actions.one(1).should.eql({})
    actions.two(2).should.eql({})
  })
})
