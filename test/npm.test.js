/* Copyright (c) 2017 Richard Rodger and other contributors, MIT License */

var Code = require('code')
var Lab = require('lab')
var Seneca = require('seneca')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect


describe('suggest', function () {

  it('query', {timeout: 7777}, function (done) {
    Seneca()

    // Place Seneca into test mode. Errors will be passed to done callback,
    // so no need to handle them in callbacks.
      .test(done)

    // Uncomment if you want to see detailed logs
    // .test(done, 'print')

    // Load the info plugin
      .use('..')

      .gate()

      .act('role:suggest,cmd:add,query:foo')
      .act('role:suggest,cmd:add,query:foo bar')

      .act('role:suggest,cmd:suggest,query:f', function (ignore, out) {
        expect(out).to.equal(['foo', 'foo bar'])
      })

      .act('role:suggest,cmd:suggest,query:foo b', function (ignore, out) {
        expect(out).to.equal(['foo bar'])
        done()
      })
  })
})


