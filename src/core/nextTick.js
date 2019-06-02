import triggerCallbacks from './triggerCallbacks'

let timer = null
let callbacks = []

export default (fn) => {
  if (timer) {
    clearTimeout(timer)
  }
  callbacks.push(fn)
  timer = setTimeout(() => {
    timer = null
    const _callbacks = callbacks
    callbacks = []
    triggerCallbacks(_callbacks)
  }, 0)
}
