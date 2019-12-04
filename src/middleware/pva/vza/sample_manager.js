/*
 * Copyright (c) 2000–2017 Virtuozzo International GmbH. All rights reserved.
 */

'use strict'

const SampleManager = require('../core/sample_manager')

module.exports = class VZASampleManager extends SampleManager {
  constructor() {
    super()

    this.name = 'vzasample_manager'
  }

}

