class NATSMethodError extends Error {}

NATSMethodError.prototype.name = 'NATSMethodError'

function extractData (response, errMsg = 'failed to query nats method') {
  if (!response.ok) {
    const error = new NATSMethodError(errMsg)
    error.response = response
    throw error
  }
  return response.data
}

module.exports = extractData