const {fail} = require('nats-method-ex')

const validateInput = (schema) => {
  return (handler) => {
    return async (data, input, subject) => {
      const {error, value} = schema.validate(data)
      if (error) return fail('invalid-input', 'input is invalid', {input: data, error})
      return await handler(value, input, subject)
    }
  }
}

module.exports = validateInput