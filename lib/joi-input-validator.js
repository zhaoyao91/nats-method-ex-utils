const {fail} = require('nats-method-ex')

const validateInput = (schema) => {
  return (handler) => {
    return async (input) => {
      const {error, value} = schema.validate(input)
      if (error) return fail('invalid-input', 'input is invalid', {input, error})
      return await handler(value)
    }
  }
}

module.exports = validateInput