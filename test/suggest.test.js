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
    var q1 = q.substring(0,2)
    var q2 = q.substring(0,3)

    Seneca()
      .test(done)
      .use('..')
      .gate()

      .act('role:suggest,cmd:add,query:'+q1)
      .act('role:suggest,cmd:suggest,query:'+q1.substring(0,1),
           function (ignore, out) {
             expect(out).to.equal([q1])
           })

      .act('role:suggest,cmd:add,query:'+q2)
      .act('role:suggest,cmd:suggest,query:'+q1.substring(0,1),
           function (ignore, out) {
             expect(out).to.equal([q1, q2])
           })

      .ready(done)
  })
})


