/* Copyright (c) 2017 Richard Rodger and other contributors, MIT License */


var Trie = require('trie-prefix-tree')


module.exports = function suggest (options) {
  var seneca = this


  seneca.add( 'role:suggest,cmd:add', cmd_add )
  seneca.add( 'role:suggest,cmd:suggest', cmd_suggest )


  var trie = Trie([])


  function cmd_add (msg, reply) {
    trie.addWord(''+msg.query)
    reply()
  }


  function cmd_suggest( msg, reply ) {
    var q = ''+msg.query
    reply('' === q ? [] : (trie.getPrefix(q) || []))
  }
}
