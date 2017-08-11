var currencies = require('currency-symbol-map/map.json')
  , currencySymbols = []

Object.keys(currencies).forEach(function (name) {
  var code = escapeRegExp(currencies[name])

  if (currencySymbols.indexOf(code) === -1) currencySymbols.push(code)
})

var currencyRegexList = currencySymbols.join('|')
  , regexMatch = new RegExp('(?=.)[' + currencyRegexList + '](([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(.[0-9]{1,2})', 'g')

module.exports = function (value) {
  if (typeof value !== 'string') return false

  var matches = value.match(regexMatch)

  // Without ternary, returns true or null
  return matches && matches.length === 1 ? true : false
}

module.exports.match = function (value) {
  return value.match(regexMatch)
}

module.exports.replace = function (str, replace) {
  return str.replace(regexMatch, replace)
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
