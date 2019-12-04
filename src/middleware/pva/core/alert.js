'use strict'

const Operator = require('../operator')

module.exports = class Alert extends Operator {
  constructor() {
    super('alertm')
  }

  // Retrieve list of active alerts.
  // id - contains eid of a VE/HN.
  //      If specified, show only active alerts for specified VE/HN.
  get_alerts(id) {
    let req = super.formRequest()

    req.payload = {
      get_alerts: {},
    }

    if (id) {
      req.payload.get_alerts['eid_list'] = { eid: id, }
    }

    return super.send(req)
  }
}

