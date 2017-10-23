'use strict';
/*  JavaScript的默认对象表示方式{}可以视为其他语言中的Map或Dictionary的数据结构，即一组键值对.
    但是JavaScript的对象有个小问题，就是键必须是字符串。但实际上Number或者其他数据类型作为键也是非常合理的。为了解决这个问题，最新的ES6规范引入了新的数据类型Map。*/

/*Map是一组键值对的结构，具有极快的查找速度。*/
/*创建Map的方法*/
var m = new Map([['Curry', 30], ['Jordan', 23], ['Lebron', 6]]);
m.get('Curry');   // 30
// 初始化一个空的Map
var m = new Map();    //空Map
m.set('Curry', 30);   // add a new key-value
m.set('Jordan', 30);   //
m.has('Curry');    // 是否存在'Curry' --> true
m.get('Curyy'); // 30
m.delete('Curry');  // 删除'Curry'
m.get('Curry');   // undefined

// 由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉
var m = new Map();
m.set('Curry', 30);
m.set('Curry', 31);
m.get('Curry'); // 31


