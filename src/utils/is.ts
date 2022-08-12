function isType(type: any) {
  return Object.prototype.toString.apply(type).slice(8, -1)
}

export function isArray(type: any) {
  return isType(type) === 'Array'
}
