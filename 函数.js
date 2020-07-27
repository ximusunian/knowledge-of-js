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
