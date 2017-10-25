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
