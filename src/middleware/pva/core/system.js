/*
 * Copyright (c) 2000–2017 Virtuozzo International GmbH. All rights reserved.
 */

'use strict'

const Operator = require('../operator')
const base64 = require('../base64')

module.exports = class System extends Operator {
  constructor() {
    super('system')
  }

  // Login into the MN/Agent.
  login(username, password, realm) {
    let req = super.formRequest()

    req.payload = {
      login: {
        name: base64.encode(username),
        password: base64.encode(password),
        realm: realm,
      },
    }

    return super.send(req)
  }

  get_vocabulary() {
    let req = super.formRequest()

    req.payload = { get_vocabulary: {}, }

    return super.send(req)
  }

  // Retrieves configuration from the specified Agent node (vzagent.conf).
  // Leave id blank to get configuration from Management Node.
  get_configuration(id) {
    let req = super.formRequest()
    req.dst = id

    req.payload = { get_configuration: {}, }

    return super.send(req)
  }
}

