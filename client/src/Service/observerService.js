let observers = {}

export default {
  registerObserver: (key, callback) => { observers[key] = callback },
  notify: (key, data) => { observers[key](data) }
}