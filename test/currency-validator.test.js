var assert = require('assert')
  , currencyValidator = require('../lib/currency-validator')

describe('Currency Validator', function() {
  it('should false if missing symbol', function () {
    assert.equal(currencyValidator(1000), false)
    assert.equal(currencyValidator('100'), false)
  })

  it('should return false if invalid symbol', function () {
    assert.equal(currencyValidator('§100'), false)
  })

  it('should return true for valid symbol and numbers', function () {
    assert.equal(currencyValidator('£100'), true)
    assert.equal(currencyValidator('£100.0'), true)
    assert.equal(currencyValidator('£100,000'), true)
    assert.equal(currencyValidator('£100,000.00'), true)
  })

})
