<p align='center'>
  <img src='https://cloud.githubusercontent.com/assets/425716/12767211/d7fa856c-c9bc-11e5-82cb-99cf540330cb.png' width='400'/>
  <p align='center'>Simple opinionated toolkit for building applications on top of React, Redux, and Immutable.js</p>
</p>

This is a work in progress - There is sparse documentation, no tests, and it's not on npm. Use at your own risk while we finish up!

## Install

One command and you're ready to roll:

```
npm install shasta --save
```

**Now**, check out the [documentation](http://shasta.tools/shasta/docs) to get started!

## Ideals

- Everything should be immutable
- Everything should work easily and be simple to understand
- Spend time building applications rather than wiring modules together

## Opinions

- Use ES6
- Central store is completely immutable via Immutable.js
  - PropTypes include Immutable.js types by default
- Easy to understand objects instead of functional composition
  - Before: `createStore(combineReducers(reducers), initialState, compose(applyMiddleware(middleware), devtools))`
  - After: `createStore({middleware: [], initialState: {}, reducer: fn})`
- Namespaced/nested actions and reducers
  - `createTodos` becomes `todos.create` in actions and reducers
- Default async middleware (thunk, promise)
- Ecosystem of plug-and-play modules
- Dead simple Component API
  - Use ES6 classes [(not using them is deprecated anyways)](http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes)
  - Bring back sane behavior
    - `defaultState` to replace `getInitialState`
    - Bind component functions scope to class (like old react)
  - Never write mapDispatchToProps or mapStateToProps
    - Define data dependencies in `storeProps`
    - All actions provided pre-bound via `this.actions`

[downloads-image]: http://img.shields.io/npm/dm/shasta.svg
[npm-url]: https://npmjs.org/package/shasta
[npm-image]: http://img.shields.io/npm/v/shasta.svg

[travis-url]: https://travis-ci.org/shastajs/shasta
[travis-image]: https://travis-ci.org/shastajs/shasta.png?branch=master
