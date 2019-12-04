'use strict'

const Operator = require('../operator')

module.exports = class BackupSubscriber extends Operator {
  constructor() {
    super('backup_subscriber')
  }

  // Reload list of VE backups on Management Node.
  // id - contains eid of a particular HN.
  reload_all(id) {
    let req = super.formRequest()

    req.payload = {
      reload_all: {},
    }

    if (id)
      req.payload.reload_all['eid'] = id

    return super.send(req)
  }

  // Refresh list of VE backups on Agent.
  // type - backup storage type, valid values are: 'parallels'.
  // FIXME: add more valid values.
  refresh(type) {
    let req = super.formRequest()

    req.payload = {
      refresh: {
        type: type,
      },
    }

    return super.send(req)
  }
}
