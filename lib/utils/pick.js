const {
  hasOwnProperty
} = Object.prototype

/**
 * @param {object} object
 * @param {array} props
 * @returns {object}
 */
function pick(object, props = []) {
  return props.reduce((acc, key) => {
    let sourceKey
    let targetKey

    if (Array.isArray(key)) {
      [
        sourceKey,
        targetKey
      ] = key
    } else {
      sourceKey = key
      targetKey = key
    }

    if (hasOwnProperty.call(object, sourceKey)) {
      acc[targetKey] = object[sourceKey]
    }

    return acc
  }, {})
}

module.exports = pick
