/**
 * util
 */
var util = require('util')
function Parent(){
    this.name = 'father';
    this.age = 6;
    this.say = function(){
        console.log('hello',this.name);
    }
}

Parent.prototype.showName = function(){
    console.log('this.name');
}

function Child(){
    this.name = "Child"
}
//不能传参，会继承私有属性
//Child.prototype = new Parent();
util.inherits(Child,Parent)
var child = new Child();
child.showName();
console.log(child.__proto__.__proto__.__proto__ == Object.prototype);

function Person(){
    this.name = 'zfpx'
    this.parent = {
        name:'parent'
    }
}

Person.prototype.toString = function(){
    console.log('this is ',this.name);
}
var p = new Person()
/**
 * showHidden 是否显示隐藏属性
 * depth 对象的递归显示深度
 * colors 是否显示颜色
 */
console.log(util.inspect(p,true,1,true));

var arr1 = [1,2]
var arr2 = [3,4]
console.log(arr1.concat(arr2));
console.log(Array.prototype.push.apply(arr1,arr2))
arr1.push(3)
arr1.push(4)


console.log(util.isArray([]));
console.log(util.isDate([]));
console.log(util.isRegExp([]));