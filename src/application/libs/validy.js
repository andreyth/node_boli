export function ValidyError (message) {
  this.type = 'ValidyError'
  this.message = message
}

export function validyIsError (val) {
  const _errors = {}

  val.forEach(v => {
    if (Object.keys(v).length > 0) {
      const key = Object.keys(v)[0]
      _errors[key] = v[key]
    }
  })

  if (Object.keys(_errors).length > 0) {
    throw new ValidyError(_errors)
  }
}

export default function validy (key, val) {
  const _error = {}

  function required () {
    if (!val) _error[key] = 'Não pode ser vazio'
    return this
  }

  function isRelative () {
    if (Object.keys(val).length > 0) {
      _error[key] = val
    }

    return this
  }

  function isString () {
    if (!(typeof val === 'string' || val instanceof String)) _error[key] = 'Tem que ser String'
    return this
  }

  function isNumber () {
    if (!(typeof val === 'number' && isFinite(val))) _error[key] = 'Tem que ser Number'
    return this
  }

  function isArray () {
    if (!(val && typeof val === 'object' && val.constructor === Array)) _error[key] = 'Tem que ser Array'
    return this
  }

  function isFunction () {
    if (!(typeof val === 'function')) _error[key] = 'Tem que ser Function'
    return this
  }

  function isBoolean () {
    if (!(typeof val === 'boolean')) _error[key] = 'Tem que ser Boolean'
    return this
  }

  function isDate () {
    if (!(val instanceof Date)) _error[key] = 'Tem que ser Date'
    return this
  }

  function isRegex () {
    if (!(val && typeof val === 'object' && val.constructor === RegExp)) _error[key] = 'Tem que ser Regex'
    return this
  }

  function isError () {
    if (!(val instanceof Error && typeof val.message !== 'undefined')) _error[key] = 'Tem que ser Error'
    return this
  }

  function isSymbol () {
    if (!(typeof val === 'symbol')) _error[key] = 'Tem que ser Symbol'
    return this
  }

  function isNull () {
    if (!(val === null)) _error[key] = 'Tem que ser Null'
    return this
  }

  function isUndefined () {
    if (!(typeof val === 'undefined')) _error[key] = 'Tem que ser Undefined'
    return this
  }

  function isObject () {
    if (!(val && typeof val === 'object' && val.constructor === Object)) _error[key] = 'Tem que ser Objeto'
    return this
  }

  function isEmpty () {
    if (!val || val === null || typeof val === 'undefined') {
      delete _error[key]
    }

    return this
  }

  function check () {
    if (_error) {
      return _error
    }
  }

  return {
    required,
    isString,
    isArray,
    isFunction,
    isBoolean,
    isNumber,
    isDate,
    isObject,
    isError,
    isRegex,
    isSymbol,
    isNull,
    isUndefined,
    check,
    isEmpty,
    isRelative
  }
}
