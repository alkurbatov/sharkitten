/*
 * Copyright (c) 2000–2017 Virtuozzo International GmbH. All rights reserved.
 */

'use strict'

const Network = require('../core/network')

module.exports = class VZANetwork extends Network {
  constructor() {
    super()

    this.name = 'vzanetworkm'
  }

}

