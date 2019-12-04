/*
 * Copyright (c) 2000–2017 Virtuozzo International GmbH. All rights reserved.
 */

'use strict'

const Operator = require('../operator')

module.exports = class License extends Operator {
  constructor() {
    super('licensem')
  }

  get_list() {
    let req = super.formRequest()

    req.payload = {
      get_list: {},
    }

    return super.send(req)
  }

  // Returns list of HWIDs.
  // Count of HWIDs is stick to count of network cards.
  get_hwid() {
    let req = super.formRequest()

    req.payload = {
      get_hwid: {},
    }

    return super.send(req)
  }

  install(serial) {
    let req = super.formRequest()

    req.payload = {
      install: {
        license: serial,
      },
    }

    return super.send(req)
  }

  update(serial) {
    let req = super.formRequest()

    req.payload = {
      update: {
        serial: serial,
      },
    }

    return super.send(req)
  }

  delete() {
    let req = super.formRequest()

    req.payload = {
      delete: {},
    }

    return super.send(req)
  }
}

