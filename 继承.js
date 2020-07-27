//1、原型链继承
// 将父类的实例作为子类的原型
// 父类
function Animal (name) {
  this.name = name || 'Animal'
  this.sleep = function () {
    console.log(this.name + '正在睡觉！');
  }
}
// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃' + food);
}
// 子类
function Cat() {

}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';
var cat = new Cat()
// 优缺点简单容易实现，但是要想为子类添加属性和方法，必须要在new Animal（）这样的语句之后执行，无法实现多继承

// 2、构造继承
function Cat1(name) {
  Animal.call(this);
  this.name = name || 'tom'
}
// 优缺点可以实现多继承，不能继承原型属性/方法

// 3、实例继承
//为父类实例添加新特性，作为子类实例返回
function Cat2(name) {
  var instance = new Animal();
  instance.name = name || 'tom';
  return instance
}
// 优缺点不限调用方式，但是不能实现多继承

// 4、拷贝继承
// 将父类多属性和方法复制到子类中
function Cat3(name) {
  var animal = new Animal();
  for( var p in animal ) {
    Cat3.prototype[p] = animal[p]
  }
  Cat3.prototype.name = name || 'tom'
}
// 优缺点支持多继承，但是效率低，占用内存

// 5、组合继承
//通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数替换
function Cat4(name){
  Animal.call(this);
this.name = name || 'Tom';
}
Cat4.prototype = new Animal();
Cat4.prototype.constructor = Cat4;

// 6、寄生组合继承
function Cat5(name){
  Animal.call(this);
this.name = name || 'Tom';
}
(function(){
// 创建一个没有实例方法的类
  var Super = function(){};
  Super.prototype = Animal.prototype;
//将实例作为子类的原型
  Cat5.prototype = new Super();
})();

//es6的扩展继承
// 继承机制是先创造父类的实例对象this，然后再用子类的构造函数修改this
class Person {
  //constructor是构造方法
  constructor(skin, language) {
    this.skin = skin;
    this.language = language
  }
  say() {
    console.log('我是父类');
  }
}

class Chinese extends Person {
  constructor(skin, language, positon) {
    //console.log(this);//报错
    super(skin, language);
    //super();相当于父类的构造函数
    //console.log(this);调用super后得到了this，不报错，this指向子类，相当于调用了父类.prototype.constructor.call(this)
    this.positon = positon
  }
  aboutMe() {
    console.log(`${this.skin} ${this.language} ${this.positon}`);
  }
}
//调用只能通过new的方法得到实例,再调用里面的方法
let obj = new Chinese('红色', '中文', '香港');
obj.aboutMe();
obj.say();