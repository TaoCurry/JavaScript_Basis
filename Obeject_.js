'use strict';
/*JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成。
JavaScript的对象用于描述现实世界中的某个对象*/
var xiaoming = {
    name : 'xiaoming',
    birth : 1990,
    school : 'No.1 Middle School',
    height : 1.70,
    weight : 65,
    score : 90
};
/*JavaScript用一个{...}表示一个对象，键值对以xxx: xxx形式申明，用,隔开。注意，最后一个键值对不需要在末尾加,，如果加了，有的浏览器（如低版本的IE）将报错。*/
xiaoming.name;  //xiaoming的name属性
xiaoming.birth; //xiaoming的birth属性

var xiaohong ={
    name : '小红',
    'middle-school' : 'No.1 Middle School'  //如果属性名包含特殊字符，就必须用''括起来
};
xiaohong['middle-school']; //访问包含特殊字符的属性，必须用['xxx']来访问，不使用.操作符
xiaohong[name]; // === xiaohong.name

var xiaoming = {
    name : '小明'
};
xiaoming.age;   //访问一个不存在的属性，返回undefined

var xiaoming = {
    name : '小明'
};
xiaoming.age;   // undefined
xiaoming.age = 18;  //新增一个age属性
xiaoming.age;   // 18
delete xiaoming.age;    //删除age属性
xiaoming.age;   // undefined
delete xiaoming['name'];    //删除name属性
xiaoming.name;  //undefined
delete xiaoming.school; //删除一个不存在的school属性也不会报错

/*要检测xiaoming是否拥有某一属性，可以用in操作符*/
var xiaoming = {
    name : '小明',
    birth : 1990,
    school : 'No.1 Middle School',
    height : 1.70,
    weight : 65,
    score : null
};
'name' in xiaoming;     // true
'grade' in xiaoming;    // false

/*不过要小心，如果in判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的,因为toString定义在object对象中，而所有对象最终都会在原型链上指向object，所以xiaoming也拥有toString属性。*/
'toString' in xiaoming;     // true

/*要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法*/
var xiaoming = {
    name : '小明'
};
xiaoming.hasOwnProperty('name');  // true
xiaoming.hasOwnProperty('toString');    // false