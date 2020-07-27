// 定义函数的定义方式
// 1 函数声明
//es5
function getSum() {}
// es6
() => {}

//2 函数表达式（函数字面量）
// es5
var sum = function () {}
// es6
let sum1 = () => {}

//3 构造函数
const sum2 = new Function("a", "b", "return a + b")



// 函数调用
//1 函数名和匿名函数调用
function getsum() {
  console.log(this); // window
}
getsum()

(function() {
  console.log(this); // window
})()

var getA = function() {
  console.log(this); // window
}
getA()

// 方法名调用
//对象、方法名
var objList = {
  name: 'methods',
  getSum: function() {
    console.log(this); // objlist对象
  }
}
objList.getSum()

// 构造器调用
function Person() {
  console.log(this); // 实例化的对象personOne
}
var personOne = new Person()

// 初始化调用
function foo() {
  console.log(this);
}
foo.apply('我是apply改变的this值')
foo.call('我是call改变的this值')

// es6中函数的调用
(() => {
  console.log(this); // window
})()

let arrowFun = () => {
  console.log(this); // window
}
arrowFun()

let arrowObj = {
  arrFun: function() {
    (() => {
      console.log(this)//this指向的是arrowObj对象
    })()
  }
}
arrowObj.arrFun()