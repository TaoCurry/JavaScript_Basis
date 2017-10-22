'use strict';
/* JavaScript的循环有两种，一种是for循环，通过初始条件、结束条件和递增条件来循环执行语句块： */
var　x = 0;
var i;
for (i=1; i<=10000; i++){
    x = x + i;
}
x;  // 50005000
/*
i=1 这是初始条件，将变量i置为1；
i<=10000 这是判断条件，满足时就继续循环，不满足就退出循环；
i++ 这是每次循环后的递增条件，由于每次循环后变量i都会加1，因此它终将在若干次循环后不满足判断条件i<=10000而退出循环。
 */

// example 计算1*2*3*...*10
'use strict';
var x = 1;
var i;
for (i=1; i<=10; i++){
    x = x * i;
}
if (x === 3628800){
    alert('1*2*3*...*10 = ' + x);
}else{
    alert('计算错误');
}
/*for循环最常用的地方是利用索引来遍历数组*/
var arr = ['Apple', 'Google', 'MicroSoft'];
var i, x;
for (i=0; i<arr.length; i++){
    x = arr[i];
    alert(x);
}

//for循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用break语句退出循环，否则就是死循环
var x = 0;
for (;;){   // 将无限循环下去
    if(x > 100){
        break;   // 通过if判断来退出循环
    }
    x ++;
}

// for...in 把一个对象的所有属性依次循环出来
var o = [
    name: 'Jack',
    age: 20,
    city: 'Mexico',
];
for (var key in o){
    alert(key); // 'name', 'age', 'city'
}
