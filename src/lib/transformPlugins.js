import reduce from 'lodash.reduce'

export default (plugins) => {
  if (!Array.isArray(plugins)) throw new Error('Invalid plugins argument')
  return reduce(plugins, (p, v, k) => {
    // grab the reducer out of it
    if (typeof v.reducer === 'function') {
      p.reducers.push(v.reducer)
    } else if (typeof v.reducer !== 'undefined') {
      throw new Error(`Invalid "reducer" export in ${k}`)
    }

    if (Array.isArray(v.reducers)) {
      p.reducers = p.reducers.concat(v.reducers)
    } else if (typeof v.reducers === 'object') {
      p.reducers.push(v.reducers)
    }

    // grab any middleware
    if (typeof v.middleware === 'function') {
      p.middleware.push(v.middleware)
    } else if (Array.isArray(v.middleware)) {
      p.middleware = p.middleware.concat(v.middleware)
    } else if (typeof v.middleware !== 'undefined') {
      throw new Error(`Invalid "middleware" export in ${k}`)
    }

    // grab any enhancers
    if (typeof v.enhancer === 'function') {
      p.enhancers.push(v.enhancer)
    } else if (typeof v.enhancer !== 'undefined') {
      throw new Error(`Invalid "enhancer" export in ${k}`)
    }
    if (Array.isArray(v.enhancers)) {
      p.enhancers = p.enhancers.concat(v.enhancers)
    } else if (typeof v.enhancers !== 'undefined') {
      throw new Error(`Invalid "enhancers" export in ${k}`)
    }

    // grab any hooks
    if (typeof v.hook === 'function') {
      p.hooks.push(v.hook)
    } else if (typeof v.hook !== 'undefined') {
      throw new Error(`Invalid "hook" export in ${k}`)
    }
    if (Array.isArray(v.hooks)) {
      p.hooks = p.enhancers.concat(v.hooks)
    } else if (typeof v.hooks !== 'undefined') {
      throw new Error(`Invalid "hooks" export in ${k}`)
    }

    return p
  }, {
    reducers: [],
    middleware: [],
    enhancers: [],
    hooks: []
  })
}
