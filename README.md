# validity-required-options

[![build status](https://secure.travis-ci.org/confuser/node-validity-currency.png)](http://travis-ci.org/confuser/node-validity-currency)
[![Coverage Status](https://coveralls.io/repos/confuser/node-validity-currency/badge.png?branch=master)](https://coveralls.io/r/confuser/node-validity-currency?branch=master)

VValidity style validator which validates a float with currency symbols

## Installation

    npm install validity-currency

## Usage

Below  is a simple example for usage with schemata:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , save = require('save')
  , createValidator = require('validity-currency')

var schema = schemata(
    { state:
      { type: String
      , validators: { all: [ createValidator() ] }
      }
    })
```

## API

### var validate = createValidator([ errorMessage ])

Create a validate function.

### validate(String:key, String:keyDisplayName, Object:object, Function:cb)

This is a validity compatible function, which in turn is used by schemata for
schema validation.

The callback signature cb(err, errorMessage).

err is an Error object if something bad happened and null otherwise.
errorMessage is a String if a validation error happened and undefined otherwise.
