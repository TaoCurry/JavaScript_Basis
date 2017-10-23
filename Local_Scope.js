'use strict';
/*局部作用域*/
//由于JavaScript的变量作用域实际上是函数内部，我们在for循环等语句块中是无法定义具有局部作用域的变量的
function foo() {
    for (var i=0; i<1000; i++) {
        //
    }
    i += 100;   // 仍然可以引用变量i
}
//为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量：
function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    i += 1; // SyntaxError
}
/*常量*/
//由于var和let申明的是变量，如果要申明一个常量，在ES6之前是不行的，我们通常用全部大写的变量来表示“这是一个常量，不要修改它的值”
var PI = 3.14;

//ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域：
const PI = 3.14;
PI = 3; //  某些浏览器不报错，但是无效果！
PI; // 3.14

