'use strict';
/**/
function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {     //获取除了a, b参数以外，函数还可能传递的参数
        for (i=2; i<arguments.length; i++) {    //索引从2开始
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
//ES6标准引入了rest参数，可以将上面的函数简化
function foo(a, b, ...rest) {   //rest参数只能写在最后，前面用...标识
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
foo(1, 2, 3, 4, 5); // a = 1; b = 2; Array[3, 4, 5]
foo(1); // a = 1; b = undefined; Array[]
/*Summarize*/
/*  传入的参数先绑定a、b，多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数。
    如果传入的参数连正常定义的参数都没填满，也不要紧，rest参数会接收一个空数组（注意不是undefined）。*/
