/* Copyright (c) 2017 Richard Rodger and other contributors, MIT License */


var Seneca = require('seneca')


Seneca({tag: 'suggest'})
  .test('print')

  .use('..')

  .use('seneca-repl', {port:10050})

  .listen(9050)

