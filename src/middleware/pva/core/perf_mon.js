'use strict'

const Operator = require('../operator')

module.exports = class PerfMon extends Operator {
  constructor(forward_to) {
    super('perf_mon', forward_to)
  }

  get(eid, class_name, counter) {
    let req = super.formRequest()

    req.payload = {
      get: {
        eid_list: {
          eid: eid,
        },
        class: {
          name: class_name,
        },
      },
    }

    if (counter) {
      req.payload.get.class['instance'] = {'counter': counter}
    }

    return super.send(req)
  }
}
