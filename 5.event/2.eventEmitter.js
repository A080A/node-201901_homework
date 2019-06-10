var EventEmitter = require('events');

/**
 *
 * */

var util = require("util")
function Bell(name){
    this.name = name
}
util.inherits(Bell,EventEmitter)

var jingleBell = new Bell('jingle')
jingleBell.on('ring',function(){
    console.log('收到礼物1')
})

jingleBell.addListener('ring',function(){
    console.log('收到礼物2')
})

var drop = function () {
    console.log('铃铛丢了')
}


jingleBell.removeAllListeners('ring')
jingleBell.once('drop',drop)

jingleBell.emit('ring');
jingleBell.removeListener('drop',drop)
jingleBell.emit('drop')
