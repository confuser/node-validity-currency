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

  it('should fail for multiple currencies', function () {
    assert.equal(currencyValidator('£100,000.00 $100'), false)
  })

  it('should return matches', function () {
    assert.deepEqual(currencyValidator.match('£100 $100'), [ '£100', '$100' ])
    assert.deepEqual(currencyValidator.match('£100.00'), [ '£100.00' ])
    assert.deepEqual(currencyValidator.match('this is £100.00'), [ '£100.00' ])
  })

  it('should remove currencies', function () {
    assert.equal(currencyValidator.replace('£100', ''), '')
    assert.equal(currencyValidator.replace('£100.00', 'hello'), 'hello')
    assert.equal(currencyValidator.replace('this is $100 £100.00', ''), 'this is  ')
    assert.equal(currencyValidator.replace('Nothing to see here', ''), 'Nothing to see here')
  })

})
