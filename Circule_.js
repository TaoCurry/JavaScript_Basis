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
var o = ｛
    name: 'Jack',
    age: 20,
    city: 'Mexico'
｝;
for (var key in o){
    alert(key); // 'name', 'age', 'city'
}

//过滤掉对象继承的属性，用hasOwnProperty()来实现
var o ={
    name: 'Jack',
    age: 20,
    city: 'Mexico'
};
for (var key in o){
    if (o.hasOwnProperty(key)){
        alert(key);    //'name', 'age', 'city'
    }
}

/*Array也是对象，而它的每个元素的索引被视为对象的属性，因此，for ... in循环可以直接循环出Array的索引*/

var arr = ['A', 'B', 'C'];
for (var i in arr){
    alert(i);   // '0', '1', '2' 请注意，for ... in对Array的循环得到的是String而不是Number
    alert(arr[i]);  // 'A', 'B', 'C' --> String not Number
}

/* While循环
While循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环。*/
var x = 0;
var n = 99;
while (n>0){
    x = x + n;
    n = n - 2;
}
x;  //计算100以内所有奇数之和

/*
do{...}while(): 先进行一次循环，循环完以后再判断循环的条件,循环推至少执行一次
 */
var n = 0;
do{
    n = n +1;
} while (n<100);
n;


                                                            /* summarize */
/*   循环是让计算机做重复任务的有效的方法，有些时候，如果代码写得有问题，会让程序陷入“死循环”，也就是永远循环下去。JavaScript的死循环会让浏览器无法正常显示或执行当前页面的逻辑，有的浏览器会直接挂掉，有的浏览器会在一段时间后提示你强行终止JavaScript的执行，因此，要特别注意死循环的问题。
     在编写循环代码时，务必小心编写初始条件和判断条件，尤其是边界值。特别注意i < 100和i <= 100是不同的判断逻辑。*/


