'use strict'

const Operator = require('../operator')
const base64 = require('../base64')

module.exports = class Session extends Operator {
  constructor() {
    super('sessionm')
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
}

