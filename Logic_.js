'use strict';
/* 条件判断
JavaScript使用if () { ... } else { ... }来进行条件判断*/
var age = 20;
if (age >= 18) {  // 如果age >= 18为true，则执行if语句块
    alert('adult');
} else { //否则执行else语句块
    alert('teenager');
}   //　其中else语句是可选的

/*如果语句块只包含一条语句，那么可以省略{}*/
var age = 20;
if (age >= 18)
    alert('adult');
else
    alert('teenager');
/*省略{}的危险之处在于，如果后来想添加一些语句，却忘了写{}，就改变了if...else...的语义*/
var age = 20;
if (age >= 18)
    alert(adult);
else
    console.log('age < 18');    // 添加一行日志,实际只执行该语句
alert('teenager');  //这行语句已经不在else的控制范围了，每次都会执行

// fixed
var age = 20;
if (age >= 18) {
    alert('adult');
} else {
    console.log('age < 18');
    alert('teenager');
}

/*多行条件判断*/

var age = 3;
if (age >= 18) {
    alert('adult');
} else if (age >= 6) {
    alert('teenager');
} else {
    alert('kid');
}

// ===
var age = 3;
if (age >= 18) {
    alert('adult');
} else {
    if (age >= 6) {
        alert('teenager');
    } else {
        alert('kid');
    }
}

// if...else...语句的执行特点是二选一，在多个if...else...语句中，如果某个条件成立，则后续就不再继续判断了.
var age = 20;
if (age >= 6) {
    alert('teenager');
} else if (age >= 18) {
    alert('audlt');
} else {
    alert('kid');
}
// teenager reason:由于age的值为20，它实际上同时满足条件age >= 6和age >= 18，这说明条件判断的顺序非常重要。

//当if的条件判断语句结果不是true或false时
var s = '123';
if (s.length) {  //条件计算结果为3

}
/*JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，因此上述代码条件判断的结果是true。*/
