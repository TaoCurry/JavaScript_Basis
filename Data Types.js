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

/*null && undefined*/
/*null : null表示一个“空”的值，它和0以及空字符串''不同，0是一个数值，''表示长度为0的字符串，而null表示“空”。
   在其他语言中，也有类似JavaScript的null的表示，例如Java也用null，Swift用nil，Python用None表示。但是，在JavaScript中，还有一个和null类似的undefined，它表示“未定义”。 undefined仅仅在判断函数参数是否传递的情况下有用。*/

/* Array */
/* 数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。 */
var arr = [1, 2, 3.14, 'Hello', null, true];  //包含六个元素。
new Array(1, 2, 3);   //通过使用函数Array()创建数组[1, 2, 3]
//出于代码的可读性考虑，强烈建议直接使用[]。
var arr = [1, 2, 3, 'hello', null, true];
arr[0]; //使用索引访问数组的元素
arr[1];
arr[6]; //超出数组索引范围，返回undefined

/* 对象　Object */
//JavaScript的对象是一组由键-值组成的无序集合
var person = {
    name : 'Bob',
    age : 20,
    tags : ['js', 'web', 'mobile'],
    city : 'Beijing',
    hascar : true,
    zipcoed : null
};
/*JavaScript对象的键都是字符串类型，值可以是任意数据类型。上述person对象一共定义了6个键值对，其中每个键又称为对象的属性，例如，person的name属性为'Bob'，zipcode属性为null。*/
person.name;   //获取name属性
person.city;   //对象名.属性名

/* Variable 变量　*/
/*
    变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合，且不能用数字开头。变量名也不能是JavaScript的关键字，如if、while等。申明一个变量用var语句
 */
var a;  //申明了变量a,此时a的值为undefined
var $b = 1;  //申明了变量$b,同时给$b赋值为１
var s_007 = '007'; //
var Anser = true;
var t = null;

/*
    在JavaScript中，使用等号=对变量进行赋值。可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用var申明一次
 */
var　a = 123;   //a的值为123
a = 'abc';  //a变为字符串
/* 这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。
静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。 */

/* strict模式　*/
/*  JavaScript在设计之初，为了方便初学者学习，并不强制要求用var申明变量。这个设计错误带来了严重的后果：如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量。使用var申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内，同名变量在不同的函数体内互不冲突。
    为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，在strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。*/
//启用strict模式的方法是在JavaScript代码的第一行写上：
'use strict';