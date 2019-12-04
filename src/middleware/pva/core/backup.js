/*
 * Copyright (c) 2000–2017 Virtuozzo International GmbH. All rights reserved.
 */

'use strict'

const Operator = require('../operator')

module.exports = class Backup extends Operator {
  constructor() {
    super('backupm')
  }

  // Retrieve list of VE backups.
  // id - contains eid of a particular VE.
  list(id) {
    let req = super.formRequest()

    req.payload = {
      list: {
      },
    }

    if (id)
      req.payload.list['options'] = {'eid': id}

    return super.send(req)
  }
}

