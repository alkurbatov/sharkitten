/*
 * Copyright (c) 2000–2017 Virtuozzo International GmbH. All rights reserved.
 */

'use strict'

const Operator = require('../operator')

module.exports = class VZPEnv extends Operator {
  constructor(forward_to) {
    super('vzpenvm', forward_to)
  }

  get_info(eid) {
    let req = super.formRequest()

    req.payload = {
      get_info: {
        config: {},
      },
    }

    if (eid)
      req.payload.get_info['eid'] = eid

    return super.send(req)
  }

  // Get virtualization product's version and parameters.
  get_vt_info() {
    let req = super.formRequest()

    req.payload = {
      get_vt_info: {},
    }

    return super.send(req)
  }

  create_snapshot(eid, name, description) {
    let req = super.formRequest()

    req.payload = {
      create_snapshot: {
        eid: eid,
        name: name,
        description: description,
      },
    }

    return super.send(req)
  }

  get_snapshot_tree(eid) {
    let req = super.formRequest()

    req.payload = {
      get_snapshot_tree: {
        eid: eid,
      }
    }

    return super.send(req)
  }

  switch_to_snapshot(eid, snapshot) {
    let req = super.formRequest()

    req.payload = {
      switch_to_snapshot: {
        eid: eid,
        uid: snapshot,
      }
    }

    return super.send(req)
  }

  delete_snapshot(eid, snapshot) {
    let req = super.formRequest()

    req.payload = {
      delete_snapshot: {
        eid: eid,
        uid: snapshot,
      }
    }

    return super.send(req)
  }
}
