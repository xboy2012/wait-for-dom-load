import isWindowLoaded from './isWindowLoaded'

let callbacks

// 加载过程中，将回调push到数组内
const runWhileLoading = fn => {
  callbacks.push(fn)
}

// 加载完毕，直接触发回调
const runAfterLoaded = fn => {
  setTimeout(fn, 0)
}

// 首次加载，开启interval轮询
const runAtFirst = fn => {
  if (isWindowLoaded()) {
    run = runAfterLoaded
    runAfterLoaded(fn)
    return
  }
  run = runWhileLoading
  callbacks = [fn]
  const interval = setInterval(() => {
    if (!isWindowLoaded()) {
      return
    }
    clearInterval(interval)
    run = runAfterLoaded
    for (let i = 0, l = callbacks.length; i < l; i++) {
      setTimeout(callbacks[i], 0)
    }
    callbacks = null
  }, 50)
}

let run = runAtFirst

export default fn => {
  run(fn)
}