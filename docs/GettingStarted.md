# Getting Started

In this section, we will show you how to get started with Shasta.

Shasta wraps the Redux's store and allows you to write simpler
reducers and actions. Under the hood, it uses [redux-actions](https://github.com/acdlite/redux-actions)
and [immutablejs](https://facebook.github.io/immutable-js/).

Shasta also supports the [redux-devtools Chrome extension](https://github.com/zalmoxisus/redux-devtools-extension)
out-of-the-box. This plugin will help you track the state of your application.

## Installation and setup

We need babel to compile our ES2015 sources.

To get started easily, let's use [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate) as a base
for this tutorial.

First, git clone the project: `git clone https://github.com/gaearon/react-hot-boilerplate.git shasta-demo`.

Cd into the repository: `cd shasta-demo`.

Install all the required dependencies with `npm install`.

You can optionally remove the .git directory to take full ownership of your new project: `rm -rf .git`

To get the complete Shasta experience, let's add babel support for decorators.

Type `npm i -D babel-plugin-transform-decorators-legacy` and add the plugin to your `.babelrc` file, which
should now look like this:

```json
{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": [
    "transform-decorators-legacy"
  ]
}
```

Finally, install shasta: `npm install --save shastajs/shasta`.

## Root view

Change `src/App.js`. It needs to reference the store and provide it to our application, using the
`<Provider>` component:

```js
import React from "react";
import {Provider, Component, PropTypes} from "shasta";
import Counter from "./components/counter";

export default class RootView extends Component {
  static displayName = 'RootView';
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}
```

The `Provider` belongs to `react-redux`, so you could change your import to reflect that.
However, we believe that we can help alleviate the amount of boilerplate and overhead by providing
all the useful things for you!

Likewise, you will see that the [PropTypes](/Component/PropTypes.html) object of Shasta contains both React's native prop types
as well as immutablejs' prop types.

Our component will need the store as a prop so let's change `src/index.js` to provide it:

```js
import DOM from 'react-dom';
import React from 'react';
import store from './core/store';
import App from './App.js';

const rootNode = <App store={store} />;
DOM.render(rootNode, document.getElementById('root'));
```

## The store

We will need to use the store in several places so let's create it.
In `src/core/store.js`, use the `createStore` function to create and export our store.
This way, we can import it and reference it as a singleton:

```js
import { createStore, createReducer } from 'shasta';
import * as counter from '../reducers/counter';

const localReducers = {
  counter
};

export default createStore({
  plugins: [],
  reducers: [
    createReducer(localReducers)
  ]
})
```

Shasta has a concept of plugins that you put directly into the store.
Plugins will extend your application by providing reducers or middlewares, among other things.
The idea is that you can add new capabilities to your application (the router, or access to web APIs) with a single line
of code, thanks to plugins.

## Our first reducer

The store needs a counter reducer so let's write it at once:

```js
import { Map } from 'immutable';

export const initialState = Map({ count: 1 });

export const increment = (state, { payload = 1 }) =>
  state.update('count', c => c + payload);

export const decrement = (state, { payload = 1 }) =>
  state.update('count', c => c - payload);

export const reset = () => initialState;
```

Shasta helps you write straight-forward reducers as a set of functions, using immutable data structure.
This makes them very easy to read.

The best part is that we can access those reducer functions as actions anywhere in our application!

## Actions

Shasta believes that you should be able to access your reducers anywhere in your app.
To do this, let's create `src/core/actions.js`:

```js
import { createActions, createReducerActions } from 'shasta';
import store from './store'
import * as counter from '../reducers/counter';

const localReducers = {
  counter
};

export default createActions({
  ...createReducerActions(localReducers)
}, store.dispatch)
```

This will effectively bind all our reducer functions to Redux's dispatch function.
We can now use them in our components.

## Using our reducer

Finally, let's create our `Counter` component in `src/components/Counter.js`:

```js
import React from "react";
import {connect, Component} from "shasta";
import actions from "../core/actions";

@connect({
  count: 'counter.count'
})
export default class Counter extends Component {

  render() {
    return <div>
      <h2>Counter</h2>

      <p>{this.props.count}</p>

      <button onClick={() => actions.counter.increment()}>
        Increment
      </button>
      <button onClick={() => actions.counter.decrement()}>
        Decrement
      </button>
      <button onClick={() => actions.counter.reset()}>
        Reset
      </button>
    </div>
  }
}
```

We're done!

Note that our actions are namespaced. By default, they will be available in the namespace matching our reducer's name.

Run the application with `npm start` and contemplate the result.

## Bonus: using lookup files

Have you noticed? We used the same pattern to import all our reducers twice: once in `actions.js` and once `store.js`:

```js
import * as counter from '../reducers/counter';

const localReducers = {
  counter
};
```

This code is not particularly interesting and error-prone. We will have to modify it in both places each time we add a
new reducer. What a chore!

What we recommend instead is to use our `glob-loader` to remove this boilerplate.

Install it with: `npm i -D contra/glob-loader`.

Add this loader in `webpack.config.js`, right next to the babel loader:

```js
module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.lookup$/,
      loaders: [
        'glob'
      ]
    }]
}
```

Now, add a `.lookup` file in the `src/reducers` folder:

```
./*.js
```

With this setup, we can now rewrite `store.js`:

```js
import { createStore, createReducer } from 'shasta';
import localReducers from '../reducers/.lookup';

export default createStore({
  plugins: [],
  reducers: [
    createReducer(localReducers)
  ]
})
```

and `actions.js`:

```js
import { createActions, createReducerActions } from 'shasta';
import store from './store'
import localReducers from '../reducers/.lookup';

export default createActions({
  ...createReducerActions(localReducers)
}, store.dispatch)
```

The important thing is you can now add new reducers directly in the `reducers` folder and have them available right away!
