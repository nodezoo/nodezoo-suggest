/* Copyright (c) 2017 Richard Rodger and other contributors, MIT License */

var Code = require('code')
var Lab = require('lab')
var Seneca = require('seneca')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect


describe('suggest', function () {

  it('query', function (done) {
    var q = 'q'+((''+Math.random()).substring(2))

    Seneca()
      .test(done)
      .use('..')
      .gate()
      .act('role:suggest,cmd:add,query:'+q)
      .act('role:suggest,cmd:suggest,query:'+q.substring(0,q.length/2),
           function (ignore, out) {
             expect(out[0]).to.equal(q)
             done()
           })
  })
})


