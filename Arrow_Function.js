'use strict';

/*ES6标准新增了一种新的函数：Arrow Function（箭头函数）。*/


x => x * x

// equal
function (x) {
    return x * x;
}

/*箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，只包含一个表达式，连{ ... }和return都省略掉了。还有一种可以包含多条语句，这时候就不能省略{ ... }和return*/
x => {
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
}

// 两个参数
(x, y) => x * x + y * y

// 无参数
() => 3.14

// 可变参数
(x, y, ...rest) => {
    var i, sum = x + y;
    for(i=0; i< rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}


