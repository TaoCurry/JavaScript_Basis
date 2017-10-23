'use strict';
/*Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。*/
//要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set
var s1 = new Set(); //空set
var s2 = new Set([1, 2, 3]);    //
s2.add(4);  // add(key)方法可以添加元素到Set中
s2;  // {1, 2, 3, 4}
s2.delete(1);   //delete(key)方法删除元素
s2;     //　{2, 3, 4}

var s = new Set([1, 1, 2, 3, 4, 5, 5]);
s;  // Set {1, 2, 3, 4, 5} 重复元素在Set中自动被过滤

/*Summarize*/
/*Map和Set是ES6标准新增的数据类型，请根据浏览器的支持情况决定是否要使用*/


