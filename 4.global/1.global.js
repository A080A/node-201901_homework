process.on('uncaughtException',function(e){
    console.log("uncaughtException",e.message)
})
/**
 * global == window 全局对象
 * module 当前模块对象
 * exports 导出对象
 * require 加载模块的方法
 * --dirname 当前模块的所在的目录的绝对路径
 * __filename 当前模块的绝对路径
 */
var  name = 'zfpx';
exports.name = name;
console.log(this.name)
//console.trace();//显示当前的调用当前堆栈



//console.log(global)

/**
 * setImmediate clearImmediate
 * pid 进程id
 * process  当前进程对象
 */
/**
 * 1.当前模块内部声明的变量
 * 2.外部导入的模块
 * 3.全局对象
 * 4.从外接
 */
process.stdout.write('hello');
console.log(process.pid)
process.stdin.on('data',function(data){
    console.log(data.toString())
})
process.on('exit',function(){
    console.log("退出当前执行")
})

try{
    console.log(a);
}catch(e){
    console.log(e.message)
}
console.log(b);

