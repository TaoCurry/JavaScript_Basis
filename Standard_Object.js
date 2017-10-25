'use strict';

/*在JavaScript的世界里，一切都是对象。*/
//但是某些对象还是和其他对象不太一样。为了区分对象的类型，我们用typeof操作符获取对象的类型，它总是返回一个字符串

/*标准对象*/
typeof 123; // 'number'
typeof NaN; // 'number'
typeof 'str';   // 'string'
typeof true;    // 'boolean'
typeof undefined;   // 'undefined'
typeof Math.abs;    // 'function'
typeof [];  // 'object'
typeof {};  // 'object'
typeof null;    // 'object'
//可见，number、string、boolean、function和undefined有别于其他类型。特别注意null的类型是object，Array的类型也是object，如果我们用typeof将无法区分出null、Array和通常意义上的object——{}。

/* 包装对象  使用关键字new创建 */
// 虽然包装对象看上去和原来的值一模一样，显示出来也是一模一样，但他们的类型已经变为object了
var n = new Number(123);    // 123,生成了新的包装类型
var b = new Boolean(true);  // true,生成了新的包装类型
var s = new String('str');  // str',生成了新的包装类型

typeof new Number(123);     // 'object'
new Number(123) === 123;    // false

//如果我们在使用Number、Boolean和String时，没有写关键字new时，Number()、Boolean和String()被当做普通函数，把任何类型的数据转换为number、boolean和string类型

var n = Number('123');  // 123 相当于parseInt()或parseFloat()
typeof n;   // 'number'

var b = Boolean('true');    // ture
typeof b;   // 'boolean'

var b1 = Boolean('false');  // true
typeof b1; // 'boolean'

var b2 = Boolean('');   // false
typeof b2;  // 'boolean'

var s = String(123.456);    // '123.456'
typeof s;   // 'string'

/* summarize */
/*
1、不要使用new Number()、new Boolean()、new String()创建包装对象；
2、用parseInt()或parseFloat()来转换任意类型到number；
3、用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
<null和undefined没有toString()方法>
4、通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
5、typeof操作符可以判断出number、boolean、string、function和undefined；
6、判断Array要使用Array.isArray(arr)；
7、判断null请使用myVar === null；
8、判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
9、函数内部判断某个变量是否存在用typeof myVar === 'undefined'。*/