export default fn => {
  let invoked = false
  let value
  return () => {
    if (!invoked) {
      invoked = true
      value = fn()
    }
    return value
  }
}
