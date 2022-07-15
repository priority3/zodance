function isType(type) {
  return Object.prototype.toString.apply(type).slice(8, -1)
}

export function isArray(type) {
  return isType(type) === 'Array'
}
