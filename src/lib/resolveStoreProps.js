import mapValues from 'lodash.mapvalues'

const getLookupKey = (o, k, args) => {
  if (Array.isArray(k)) return k
  if (typeof k === 'function') return getLookupKey(o, k(...args), args)
  if (typeof k === 'string') return k.split('.')
  throw new Error(`Unknown lookup key: ${k}`)
}
// supports array of strings, strings with dot, or function
const lookup = (o, k, args) => o.getIn(getLookupKey(o, k, args))

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
