exports.loaded = function(){
    console.log(module.loaded);
}
console.log('A 开始加载')
require('./b')