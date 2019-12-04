'use strict'

class Request {
  constructor(src) {
    // Protocal version.
    // Usually you don't need to change this value.
    this.version = '4.5.0'

    // Internal type of the message.
    // Usually you don't need to set this value.
    this.type = undefined

    // Packet id. Must be unique.
    this.id = undefined

    // Request operation progress.
    // Requires packet id to be set.
    this.progress = 'off'

    // Ask to log this task inside VA MN DB.
    this.log = 'on'

    // Custom operation processing timeout.
    this.timeout = undefined

    // VA operation priority.
    this.priority = undefined

    // Destination that will process the packet.
    // Could be other VA Agent or VE.
    this.dst = undefined

    // VA operator name.
    this.target = undefined

    // Command payload.
    this.payload = {}

    // The source routing information.
    this.src = undefined

    Object.assign(this, src)
  }

  toPacket() {
    let req = {
      packet: {
        _attributes: {
          version: this.version,
          progress: this.progress,
          log: this.log,
        },

        data: {},
      },
    }

    if (this.type)
      req.packet._attributes['type'] = this.type

    if (this.id)
      req.packet._attributes['id'] = this.id

    if (this.timeout)
      req.packet._attributes['timeout'] = this.timeout

    if (this.priority)
      req.packet._attributes['priority'] = this.priority

    if (this.dst)
      req.packet['dst'] = { host: this.dst, }

    // Special case: the 'system' operator doesn't work
    // if we specify the target.
    if (this.target !== 'system')
      req.packet.target = this.target

    req.packet.data[this.target] = this.payload

    if (this.src)
      req.packet['src'] = this.src

    return req
  }
}

module.exports = {
  Request: Request,
}

