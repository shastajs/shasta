import mapValues from 'lodash.mapvalues'

// supports array of strings, strings with dot, or function
const lookup = (o, k, args) => {
  if (typeof k === 'function') return k(o, ...args)
  if (typeof k === 'string') return o.getIn(k.split('.'))
  if (Array.isArray(k)) return o.getIn(k)
  throw new Error(`Unknown lookup key: ${k}`)
}

// takes an object where key is anything you want
// and value (aka storeProp) is either
// - a dot delimited string
// - array of strings
// - function that returns an array of strings
// it will then dive into an immutable object and grab all of these storeProps
// and return the same object, but where the values are the resolved data
export default (storeProps, storeState, props) =>
  mapValues(storeProps, (v) =>
    lookup(storeState, v, [ storeState, props ])
  )
