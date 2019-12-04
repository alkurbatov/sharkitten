/*
 * Copyright (c) 2000–2017 Virtuozzo International GmbH. All rights reserved.
 */

'use strict'

const Operator = require('../operator')

module.exports = class Summary extends Operator {
  constructor() {
    super('summarym')
  }

  get_summary(folder) {
    let req = super.formRequest()

    req.payload = {
      get_summary: {
        id: folder,
      },
    }

    return super.send(req)
  }
}

