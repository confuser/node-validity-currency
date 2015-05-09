var currencies = require('currency-symbol-map/map.json')
  , currencySymbols = []

Object.keys(currencies).forEach(function (name) {
  var code = escapeRegExp(currencies[name])

  if (currencySymbols.indexOf(code) === -1) currencySymbols.push(code)
})

var currencyRegexList = currencySymbols.join('|')
  , regexMatch = new RegExp('(?=.)^[' + currencyRegexList + '](([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(.[0-9]{1,2})?$')

module.exports = function (value) {
  return regexMatch.test(value)
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
