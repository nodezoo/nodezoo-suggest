/* Copyright (c) 2017 Richard Rodger and other contributors, MIT License */

var BASES = process.env.BASES.split(',')

var Seneca = require('seneca')

Seneca({tag: 'suggest'})
  .test('print')

  .use('../suggest.js')

  .use('mesh', {
    pin: 'role:suggest',
    bases: BASES,
    host: '@eth0',
    sneeze: {silent:false}
  })

