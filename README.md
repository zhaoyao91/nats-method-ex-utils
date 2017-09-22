## Nats Method Ex Utils

Utils for [nats-method-ex](https://github.com/zhaoyao91/nats-method-ex).

## About Dependencies

- the only explicit dependency is [nats-method-ex](https://github.com/zhaoyao91/nats-method-ex).
- if any util needs dependencies, it will receive them from builder args.

## Usage

Install

```
npm install --save nats-method-ex nats-method-ex-utils
```

Import

```ecmascript 6
const {xxx} = require('nats-method-ex-utils')
```

## Utils

#### joiInputValidator

```ecmascript 6
const joi = require('joi')
const {
  joiInputValidator: validateInput
} = require('nats-method-ex-utils')

methodEx.define('some.method', validateInput(
  joi.object({
    name: joi.string().required(),
    age: joi.number()
  }).required()
)(
  async (user) => {
    ...
  }
))
```

#### extractData

Extract data from response. If `response.ok` is false, error will be thrown.

```ecmascript 6
const {extractData} = require('nats-method-ex-utils')

const response = await methodEx.call('xxx')
const data = extractData(response)
```

## License

MIT