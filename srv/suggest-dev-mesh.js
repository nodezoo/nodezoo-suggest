/* Copyright (c) 2017 Richard Rodger and other contributors, MIT License */


var Seneca = require('seneca')


Seneca({tag: 'suggest'})
  .test()

  .use('monitor')

  .use('mesh', {
    pin:'role:suggest'
  })

  .use('../suggest.js')


