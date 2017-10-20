/*

 */

/*Number*/
/*JavaScript不区分整数和浮点数，统一用Number表示*/
123;//整数
0.456;//浮点数
1.23455e6;//科学计数法
-99;//负数
NaN;//Not a Number,无法计算结果时用NaN表示
Infinity;//无限大

/*Number可以直接做四则运算*/
1 + 2；//3
4 * 4;//16
1 / 0;//Infinity
0 / 0;//NaN
10 % 3;//1,取余数

/*字符串
字符串是以单引号'或双引号"括起来的任意文本，比如'abc'，"xyz"等等。请注意，''或""本身只是一种表示方式，不是字符串的一部分，因此，字符串'abc'只有a，b，c这3个字符。*/

/*
布尔值和布尔代数的表示完全一致，一个布尔值只有true、false两种值，要么是true，要么是false，可以直接用true、false表示布尔值，也可以通过布尔运算计算出来
 */
true;  //true值
false;  //false值
2 > 1;  //true值
1 > 2;  //false值
/*&& || !*/
true && true; //true
false && false; //false

true || true; // true
false || true;  //true
false || true || false; //true

! true; //false
! false; //true
/*布尔值经常用在条件判断中*/

/*Comparing*/
/* > < >= <= == === */
// ==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果
// ＝＝＝比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较
//由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较。

//另一个例外是NaN这个特殊的Number与所有其他值都不相等，包括它自己：
NaN === NaN; //false
//唯一能判断NaN的方法是通过isNaN()函数：
isNaN(NaN); //true

/*浮点数比较*/
1 / 3 === (1 - 2 / 3);  //false
//这不是JavaScript的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.00000001;   //true

