# Opinions

## Core Ideals

- Everything should be immutable
- Everything should work easily and be simple to understand
- Spend time building applications rather than wiring modules together

## Our Implementation

- Use ES6
- Central store is completely immutable via Immutable.js
  - PropTypes include Immutable.js types by default
  - Shasta plugins and components rely on this immutability
- Easy to understand objects instead of functional composition
  - Before: `createStore(combineReducers(reducers), initialState, compose(applyMiddleware(middleware), devtools))`
  - After: `createStore({middleware: [], initialState: {}, reducer: fn})`
- Namespaced/nested actions and reducers
  - `todos.create` as an action corresponds to a `todos.create` reducer and `todos` in the store
- Default middleware
  - thunk
  - devtools
- Ecosystem of plug-and-play modules
- Dead simple Component API
  - Use ES6 classes [(not using them is deprecated anyways)](http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes)
  - Bring back sane behavior
    - `defaultState` to replace `getInitialState`
    - Bind component functions scope to class (like old react)
  - Never write mapDispatchToProps or mapStateToProps
    - Define data dependencies in `storeProps`
    - All actions provided pre-bound via `this.actions`
