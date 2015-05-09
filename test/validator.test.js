var assert = require('assert')
  , validate = require('../validator')

describe('Required Options Validation', function() {
  it('should not pass back an error when the value is valids', function () {
    var validator = validate()

    validator('amount', 'amount', { amount: '£100' }, function (err, errMessage) {
      assert.equal(errMessage, undefined)
    })
  })

  it('should pass back an error when the validation fails', function () {
    var validator = validate()

    validator('amount', 'amount', { amount: 'bye' }, function (err, errMessage) {
      assert.equal(errMessage, 'amount must contain a valid currency')
    })
  })

  it('should pass back custom message when the validation fails', function () {
    var customError = 'This is a custom error message'
      , validator = validate(customError)

    validator('amount', 'amount', { amount: 'bye' }, function (err, errMessage) {
      assert.equal(errMessage, customError)
    })
  })

})
