# PropTypes


The shasta PropTypes inherit from [React PropTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) as well as [react-immutable-proptypes](https://github.com/HurricaneJames/react-immutable-proptypes) to add support for immutable validators. Please view the [react-immutable-proptypes documentation](https://github.com/HurricaneJames/react-immutable-proptypes/blob/master/README.md) for more information.

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

