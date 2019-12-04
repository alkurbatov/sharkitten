'use strict'

const Operator = require('../operator')

module.exports = class ServerGroup extends Operator {
  constructor() {
    super('server_group')
  }

  // Retrieves a list of servers.
  get_list(type) {
    let req = super.formRequest()

    req.payload = {
      get_list: {},
    }

    if (type)
      req.payload.get_list['type'] = type

    return super.send(req)
  }

  // Retrieves detailed information about the specified server.
  // Omit eid to get detailed information about all servers.
  get_info(eid) {
    let req = super.formRequest()

    req.payload = {
      get_info: {},
    }

    if (eid)
      req.payload.get_info['eid'] = eid

    return super.send(req)
  }
}

