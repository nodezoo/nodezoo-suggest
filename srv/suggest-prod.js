/* Copyright (c) 2017 Richard Rodger and other contributors, MIT License */

//var BASES = process.env.BASES.split(',')
var CONSUL = process.env.CONSUL_SERVICE_HOST || 'localhost'


var Seneca = require('seneca')

Seneca({tag: 'suggest'})
  .test('print')

  .use('consul-registry', {
    host: CONSUL
  })

  .use('../suggest.js')

  .use('mesh', {
    pin: 'role:suggest',
    //bases: BASES,
    host: '@eth0',
    //sneeze: {silent:false}
    discover: {
      registry: {
        active: true
      }
    }
  })
