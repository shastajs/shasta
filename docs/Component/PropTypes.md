# PropTypes


The shasta PropTypes inherit from [React PropTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) as well as [react-immutable-proptypes](https://github.com/HurricaneJames/react-immutable-proptypes) to add support for immutable validators.

### Example

```js
// ...
import { PropTypes, Component } from 'shasta'

export default class View extends Component {
  // ...
  static proptypes = {
    me: PropTypes.map.isRequired,
    online: PropTypes.bool,
    users: PropTypes.listOf(
      PropTypes.contains({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
      })
    )
  };
  // ...
}

```

## API


### Types

```
PropTypes.list         // Immutable.List.isList
PropTypes.map          // Immutable.Map.isMap
PropTypes.orderedMap   // Immutable.OrderedMap.isOrderedMap
PropTypes.set          // Immutable.Set.isSet
PropTypes.orderedSet   // Immutable.OrderedSet.isOrderedSet
PropTypes.stack        // Immutable.Stack.isStack
PropTypes.seq          // Immutable.Seq.isSeq
PropTypes.iterable     // Immutable.Iterable.isIterable
PropTypes.record       // instanceof Record
PropTypes.contains     // Immutable.Iterable.isIterable - contains(shape)
PropTypes.mapContains  // Immutable.Map.isMap - contains(shape)
```

* `PropTypes.listOf` is based on `React.PropTypes.array` and is specific to `Immutable.List`.

* `PropTypes.mapOf` is basically the same as `listOf`, but it is specific to `Immutable.Map` It will check that the prop is an Immutable.Map and that the values are of the specified type.

* `PropTypes.orderedMapOf` is basically the same as `listOf`, but it is specific to `Immutable.OrderedMap`.

* `PropTypes.orderedSetOf` is basically the same as `listOf`, but it is specific to `Immutable.OrderedSet`.

* `PropTypes.stackOf` is basically the same as `listOf`, but it is specific to `Immutable.Stack`.

* `PropTypes.iterableOf` is the generic form of listOf/mapOf. It is useful when there is no need to validate anything other than Immutable.js compatible (ie. `Immutable.Iterable`). Continue to use `listOf` and/or `mapOf` when you know the type.

* `PropTypes.recordOf` is like `contains`, except it operates on Record properties.

```js
// ...
aRecord: PropTypes.recordOf({
  keyA: PropTypes.string,
  keyB: PropTypes.list.isRequired
})
// ...
```

The two following validators cover the output of `Immutable.fromJS` on standard JSON data sources:

* `PropTypes.contains` (formerly `shape`) is based on `React.PropTypes.shape` and will try to work with any `Immutable.Iterable`. In practice, I would recommend limiting this to `Immutable.Map` or `Immutable.OrderedMap`. However, it is possible to abuse `contains` to validate an array via `Immutable.List`. That said, please, just... don't.

```js
// ...
aMap: PropTypes.contains({
  aList: PropTypes.contains({
    0: PropTypes.number,
    1: PropTypes.string,
    2: PropTypes.number.isRequired,
  }).isRequired,
})
// ...
<SomeComponent aList={Immutable.fromJS({aList: [1, 'two', 3]})} />
```

* `PropTypes.mapContains` is based on `React.PropTypes.shape` and will only work with `Immutable.Map`.

```js
// ...
aMap: PropTypes.mapContains({
  aList: PropTypes.list.isRequired,
})
// ...
<SomeComponent aList={Immutable.fromJS({aList: [1, 2]})} />
```

