/* Copyright (c) 2017 Richard Rodger and other contributors, MIT License */

var PORT = process.env.PORT || 9000

var Seneca = require('seneca')

Seneca({tag: 'suggest'})
  .listen(PORT)

  .use('../suggest.js')


