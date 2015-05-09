var currencyValidator = require('./lib/currency-validator')

module.exports = function (customMessage) {

  function validate(key, keyDisplayName, object, cb) {

    if (!currencyValidator(object[key])) {
      var message = customMessage || keyDisplayName + ' must contain a valid currency'

      return cb(null, message)
    }

    return cb(null, undefined)
  }

  return validate

}
