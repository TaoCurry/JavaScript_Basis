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
//JavaScript实际上只有一个全局作用域。任何变量（函数也视为变量），如果没有在当前函数作用域中找到，就会继续往上查找，最后如果在全局作用域中也没有找到，则报ReferenceError错误

/*名字空间*/
//全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。
//减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中


var MYAPP　= {};  //唯一的全局变量
MYAPP.name = 'mayapp';  //其他变量
MYAPP.version = 1.0;    //
MYAPP.foo = function () {   //其他函数
    return 'foo';
}
// 把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能。许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等。
