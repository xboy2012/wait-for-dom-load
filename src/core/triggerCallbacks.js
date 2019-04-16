export default (callbacks) => {
  for (let i = 0, l = callbacks.length; i < l; i++) {
    try {
      callbacks[i]()
    } catch (e) {
      setTimeout(() => {
        throw e
      }, 0)
    }
  }
}
