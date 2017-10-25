'use strict';
/*
JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。
 */

function add(x, y, func) {
    return func(x) + func(y);
}

add(-1, 1, Math.abs);   // 2

/*map data structure 映射. map()作为高阶函数，事实上它把运算规则抽象了*/

function pow() {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // map()方法定义在JavaScript的Array中
arr.map(pow);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String);    // ['1', '2', '3', '4', '5', '6', '7', '8', '9']

/* reduce Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算*/

var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x + y;
});  // 25

// 要把[1, 3, 5, 7, 9]变换成整数13579，reduce()也能派上用场
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return 10 * x + y;
});
