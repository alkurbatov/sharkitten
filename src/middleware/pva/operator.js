/*
 * Copyright (c) 2000–2017 Virtuozzo International GmbH. All rights reserved.
 */

'use strict'

const xmlapi = require('./xmlapi')

module.exports = class Operator {
  constructor(name, forward_to) {
    this.name = name
    this.forward_to = forward_to
  }

  formRequest() {
    let req = new xmlapi.Request( {target: this.name,} )

    if (this.forward_to)
      req.dst = this.forward_to

    return req
  }

  send(req) {
    // FIXME: write me!

    return req
  }
}

