// 1、对象的声明方法
// 1-1 字面量
var test2 = {x:123, y: 345}
console.log(test2);//{x:123,y:345};
console.log(test2.x);//123
console.log(test2.__proto__.x);//undefined
console.log(test2.__proto__.x === test2.x);//false

// 1-2 构造函数
var test1 = new Object({x: 123, y: 345});
console.log(test1);//{x:123,y:345}
console.log(test1.x);//123
console.log(test1.__proto__.x);//undefined
console.log(test1.__proto__.x === test1.x);//false

// 1-3 内置方法
let test = Object.create({x: 123, y: 345});
console.log(test);//{}
console.log(test.x);//123
console.log(test.__proto__.x);//123
console.log(test.__proto__.x === test.x);//true

// 三种方法的优缺点
// 1.功能：能够实现对象的声明，并能够赋值和取值
// 2.继承性：内置方法创建的对象继承到__proto__属性上
// 3.隐藏属性：这种声明方法会替代为内部的每个成员（属性或方法）生成一些隐藏属性，这些隐藏属性是可以读取和可配置的，属性分类见下面
// 4 .. 属性读取：Object.getOwnPropertyDescriptor（）或getOwnPropertyDescriptor（）
// 5.属性设置：Object.definePropertype或Object.defineProperties
