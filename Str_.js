'use strict';
/* JavaScript的字符串就是用''或""括起来的字符表示。 */
'ok';   //
"I'm ok!"   //
'Ｉ\'m \"OK\"!';  // 字符串内部既包含'又包含"，使用\进行转义

/* \n表示换行，\t表示制表符，字符\本身也要转义，所以\\表示的字符就是\。 */
// ASCII字符可以以\x##形式的十六进制表示
'\x41'; //完全等同于 'A'

//用\u####表示一个Unicode字符
'\u4e2d\u6587'; //中文

/*　多行字符串　*/
/* 由于多行字符串用\n写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用反引号 ` ... ` 表示*/
alert(`这是一个
多行
字符串
`);     //使用``反引号表示多行字符串

/*　模版字符串　*/
//要把多个字符串连接起来，可以用+号连接：
var name = 'Curry';
var age = 28;
var message = '你好，'　+ name + ',你今年' + age + '岁了！';
alert(message);

/*如果有很多变量需要连接，用+号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量*/
var name = '小明';
var age = 20;
var message = `你好，${name},你今年${age}岁了?`; //` ${...} ${xxx}`
alert(message);

/*操作字符串*/
var s = 'Hello World';
s.length(); //
s.[0];  //
s.[13]; //undefined,超出范围的索引不会报错，但一律返回undefined
//需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果
var s = 'Test';
s[0] = 'X';
alert(s); //s仍然为'Test'

/*JavaScript为字符串提供了一些常用方法，注意，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串*/
//toUpperCase()：把一个字符串全部变为大写
var　s = 'curry';
s.toUpperCase();    //'CURRY'

//toLowerCase:把一个字符串全部变为小写
var s = 'SUMMER';
s.toLowerCase();    //'summer'

//indexOf:搜索指定字符串出现的位置
var s = 'hello,world';
s.indexOf('world'); //返回7
s.indexOf('World'); //没有找到指定的字符串，返回-1

//substring:返回指定索引区间的子串
var s = 'hello,world';
s.substring(0,5);   //从索引0开始到5（不包括5），返回'hello'
s.substring(7);     //从索引7开始到结束，返回'world'


