'use strict';
 /*定义函数*/
 function abs(x) {   // function 函数定义 abs函数名称 x形式参数
     if (x >= 0){
         return x;
     } else{
         return -x;
     }
 }  // {}中的内容为函数体
abs(10);    //  10
abs(-19);   // 19
 //函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回。因此，函数内部通过条件判断和循环可以实现非常复杂的逻辑。
//如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。

/* 第二种方式定义函数 */
//以变量方式var foo = function () {}定义的函数实际上也是一个全局变量,顶层函数的定义也被视为一个全局变量，并绑定到window对象
var abs = function (x){    // function(x){}是一个匿名函数，赋值给abs
  if (x >= 0){
      return x;
  }  else{
      return -x;
  }
};  //需要加; 因为是一个赋值语句
//上述两种定义函数的方式完全等价

/* 函数调用 */
abs(10);
abs(-11, 'hahaha'); // 11 JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数.
abs();  // 返回 NaN 此时abs(x)函数的参数x将收到undefined，计算结果为NaN。
/* 要避免收到undefined，可以对参数进行检查 */
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}