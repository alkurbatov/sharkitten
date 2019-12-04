'use strict'

const Operator = require('../operator')

module.exports = class SampleManager extends Operator {
  constructor() {
    super('sample_manager')
  }

  // Retrieve list of VE templates.
  // id - contains eid of a VE Template.
  //      If specified, list only VE template with this eid.
  get(id) {
    let req = super.formRequest()

    req.payload = {
      get: {},
    }

    if (id)
      req.payload.get['id'] = id

    return super.send(req)
  }
}

