'use strict';
/*不在任何函数内定义的变量就具有全局作用域。
    实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性*/
var course = 'Learn JavaScript';
alert(course);  //'Learn JavaScript'
alert.(window.course);  // 'Learn JavaScript'

// 以变量方式var foo = function () {}定义的函数实际上也是一个全局变量
// 顶层函数的定义也被视为一个全局变量，并绑定到window对象
function foo() {
    alert('foo')
}
foo();  //直接调用foo()
window.foo();   // 通过window.foo()调用

// 直接调用的alert()函数其实也是window的一个变量
