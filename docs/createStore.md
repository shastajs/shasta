# createStore()

A store holds the entire state tree of your application.

The only way to change the state inside it is to dispatch an action on it, which triggers a reducer to modify the state in an immutable way.

To create it, pass your root reducer and some other options to it:

```js
const store = createStore({
  reducer: reducerFunction,
  initialState: Map({
    someStuff: 'yep'
  })
})
```

## Options

- `reducer`
  - Required
  - Expects a reducer function that handles actions
  - You probably want to use [`combineReducers`](docs/combineReducers.md) to create this function
- `initialState`
  - Optional (defaults to `Map()`)
  - Expects an Immutable.js type
    - Any type is cool, but you probably want a Map
    - This is the initial state of your store
- `middleware`
  - Optional (defaults to `[]`)
  - Expects an array of middleware functions
    - Middleware functions intercept actions before they reach the store
- `enhancers`
  - Optional (defaults to `[]`)
  - Expects an array of store enhancer functions
    - Store enhancers allow you to plug in third-party capabilities like time travel, persistence, etc.

## Example

```js
import { createStore, combineReducers } from 'shasta'
import {
  reducer as routerReducer,
  middleware as routerMiddleware,
  listenForReplays
} from 'shasta-router'

const reducer = combineReducers({
  counter: {
    increment: (state) => ++state,
    decrement: (state) => --state,
  },
  router: routerReducer
})

const store = createStore({
  reducer: reducer,
  initialState: Map({
    counter: 123
  }),
  enhancers: [ listenForReplays ],
  middleware: [ routerMiddleware ]
})
```

## Considerations

Coming soon
