/*
 * Copyright (c) 2000–2017 Virtuozzo International GmbH. All rights reserved.
 */

'use strict'

const SampleManager = require('../core/sample_manager')

module.exports = class VZPSampleManager extends SampleManager {
  constructor() {
    super()

    this.name = 'vzpsample_manager'
  }

}

