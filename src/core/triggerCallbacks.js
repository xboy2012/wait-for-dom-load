export default (callbacks) => {
  for (let i = 0, l = callbacks.length; i < l; i++) {
    setTimeout(callbacks[i], 0)
  }
}
