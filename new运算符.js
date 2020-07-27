// new 的过程
//1、创建一个新对象；2、this指向构造函数；3、构造函数有返回，会替换new出来的对象，如果没有就是new出来的对象

// 手动实现一个new
var new1 = function(func) {
  var o = Object.create(func.prototype); // 创建对象
  var k = func.call(o); // 改变this指向
  if(k && k instanceof Object) { // 判断k的类型是不是对象
    return k;
  } else {
    return o
  }
}