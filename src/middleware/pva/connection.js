'use strict'

const convert = require('xml-js')
const log = require('bunyan').createLogger({name: 'sharkitten:pva:connection'})
const tls = require('tls')

const options = {
  compact: true,
  spaces: 2,
}

module.exports = class Connection {
  constructor() {
    this.connected = false
    this.socket = undefined
    this.packet_id = 0

    this.onConnect = undefined
    this.onData = undefined
  }

  connect(options) {
    this.socket = tls.connect(options)

    this.socket.on('data', (data) => {
      log.info('Received:\n' + data)

      if (this.connected === false) {
        this.connected = true

        if (this.onConnect)
          this.onConnect()

        return
      }


      if (this.onData) {
        // Cut the trailing '\0' before conversion to json in order to
        // avoid failure in the sax parser
        // ('\0' is treated as extra text outside the root node).
        const json = convert.xml2js(data.slice(0, -1), options)

        this.onData(json)
      }
    })

    this.socket.on('close', () => {
      log.info('Connection closed')
    })
  }

  send(req) {
    this.packet_id += 1
    req.id = this.packet_id

    // Put trailing '\0' to the end of the packet otherwise
    // the packet will be ignored by Agent.
    const xml = convert.js2xml(req.toPacket(), options) + '\0'

    log.info('Sent:\n' + xml)
    this.socket.write(xml)
  }
}

