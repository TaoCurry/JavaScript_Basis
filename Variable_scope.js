'use strict';
/*变量作用域*/
/*在JavaScript中，用var申明的变量实际上是有作用域的。如果一个变量在函数体内部申明，则该变量的作用域为整个函数体，在函数体外不可引用该变量*/
function foo() {
    var x = 1;
    x = x + 1;
}
x = x + 2;  // ReferenceError! 无法在函数体外引用变量x

function foo() {
    var x = 1;
    x = x + 1;
}
function bar() {
    var x = 'A';
    x = x + 'B';
}
//如果两个不同的函数各自申明了同一个变量，那么该变量只在各自的函数体内起作用。换句话说，不同函数内部的同名变量互相独立，互不影响

/* 由于JavaScript的函数可以嵌套，此时，内部函数可以访问外部函数定义的变量，反过来则不行 */
function foo() {
    var x = 1;
    function bar() {
        var y = x + 1;  // bar可以访问foo的变量x!
    }
    var z = y + 1;  // ReferenceError! foo不可以访问bar的变量y!
}

/*shadow*/
function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        alert('x in bar() = ' + x); // 'A'
    }
    alert('x in foo() = ' + x);  // 1
}
//JavaScript的函数在查找变量时从自身函数定义开始，从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。

/*变量提升*/
//JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部
function foo() {
    var x = 'Hello,' + y;
    alert(x);       //// 'Hello, undefined'
    var y = 'Curry';
}
foo();

//等价于
function foo() {
    var y;  //声明了变量，但是没有赋值
    var x = 'Hello,' + y;
    y = 'Curry';
}
/* 由于JavaScript的这一怪异的“特性”，我们在函数内部定义变量时，请严格遵守“在函数内部首先申明所有变量”这一规则。最常见的做法是用一个var申明函数内部用到的所有变量 */
function foo() {
    var
        x = 1;  // x = 1
        y = x + 1;  // y = 2
        z, i;   //  z和i为undefined
    // 其他语句
    for (i=0; i<100; i++) {
        ...
    }

}