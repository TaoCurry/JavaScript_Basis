'use strict';

/*JavaScript还有一个关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
    arguments类似Array但它不是一个Array*/
function foo(x) {
    alert(x);   // 10
    for (var i = 0; i < arguments.length; i++) {
        alert(arguments[i]);    // 拿到foo()调用的三个参数：10, 20, 30
    }
}

foo(10, 20, 30);

// 函数不定义任何参数的时候，依然可以拿到参数的值（实参）
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;     // 条件赋值语句
}
abs();  // 0
abs(10);  // 10
abs(-11);   // 11

//实际上arguments最常用于判断传入参数的个数。
//foo(a[,b], c)
//接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b;
        b = null;
    }
    // ...
}