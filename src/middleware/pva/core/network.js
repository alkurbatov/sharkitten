'use strict'

const Operator = require('../operator')

module.exports = class Network extends Operator {
  constructor() {
    super('networkm')
  }

  list() {
    let req = super.formRequest()

    req.payload = {
      list: {},
    }

    return super.send(req)
  }
}

