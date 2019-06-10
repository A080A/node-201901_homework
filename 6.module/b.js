exports.loaded = function(){

    console.log(module.loaded)
}
console.log('b 模块开始加载')

require('./a')