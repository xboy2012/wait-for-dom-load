let fn = () => {
  const readyState = document.readyState
  const loaded = readyState === 'complete' || readyState === 'loaded'
  if (loaded) {
    fn = () => true
  }
  return loaded
}

export default () => fn()
