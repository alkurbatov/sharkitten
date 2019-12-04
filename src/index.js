'use strict'

const config = require('config')

const PVA = require('./middleware/pva/connection')
const base64 = require('./middleware/pva/base64')
const consts = require('./middleware/pva/consts')
const core = require('./middleware/pva/core')
const vzp = require('./middleware/pva/vzp')
const xmlapi = require('./middleware/pva/xmlapi')

const options= {
  host: config.middleware.pva.host,
  port: config.middleware.pva.port,
  secureProtocol: 'SSLv23_method',
  rejectUnauthorized: false
}

function onConnect() {
  const system = new core.System()
  const auth = config.authentication

  pva.send(system.login(auth.username, auth.password, auth.realm))
}

let stop = false

function onData() {
  if (stop)
    return

  const perf_mon = new core.PerfMon('d98c6ac2-1c75-5446-b658-992b1d938c77')
  pva.send(perf_mon.get('e80c3409-cbd0-4343-b767-44a435948d75',
    'counters_vz_net'))

  //const system = new core.System()
  //pva.send(system.get_configuration('564e59da-1885-7346-88a2-b97910d745a2'))

  /*
  let packet = {
    packet: {
      _attributes: {
        progress: 'on',
        log: 'on',
        timeout: 300,
      },
      dst: {
        //host: 'e6446eb1-203c-2b4f-9c93-9f3097a839dc',
        host: '9e3d31a9-d05c-4751-8a29-375628f3701b',
        //host: 'b6a445e0-1c71-524b-bdeb-698d8ef2b126',
      },
      target: 'processm',
      data: {
        processm: {
          execute: {
            argv: [
              //base64.encode('sleep'),
              //base64.encode('10000'),
              base64.encode('ping'),
              base64.encode('ya.ru'),
            ],
            stdio: {
              error: {},
              output: {},
            },
          },
        },
      },
    },
  }

  pva.send(packet)
  */

  /*
  let req = new xmlapi.Request({target: 'perf_mon'})
  req.payload = {
    get: {
      eid_list: {
        //eid: '10558832-541b-49ec-b625-7a83893b76bd',
        //eid: '0be9d3c8-ce06-44c1-8c8e-5deba88ed4a7',
        eid: 'b7041498-7476-47d2-a42d-eaff82c782a1',
      },
      class: {
        name: 'counters_vzp_quota',
        instance: {
          counter: 'counter_disk_space_used',
          counter: 'counter_disk_share_used',
        }
      },
    }
  }

  pva.send(req)
  */

  stop = true
}

let pva = new PVA()
pva.onConnect = onConnect
pva.onData = onData

pva.connect(options)

