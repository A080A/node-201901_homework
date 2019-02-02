var fs = require('fs');
var path = require("path")
fs.readFile(path.join(__dirname,'1.txt'),function(err,data){
    console.log(data.toString());
})

process.nextTick(function(){
    console.log('a');
    process.nextTick(function(){
        console.log('b');
    })
})

setImmediate(function(){
    console.log('a');
    setImmediate(function(){
        console.log('c');
    })
})

setTimeout(function(){
    console.log('a扫地 setTimeout');
},0);

//nextTick > setTimeout > setImmediate > 异步IO