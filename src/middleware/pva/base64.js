'use strict'

exports.encode = (data) => {
  return Buffer.from(data).toString('base64')
}

exports.decode = (data) => {
  return Buffer.from(data, 'base64').toString('ascii')
}
