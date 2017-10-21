'use strict';
/*JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。要取得Array的长度，直接访问length属性*/
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length; //6

/*直接给Array的length赋一个新的值会导致Array大小的变化*/
var arr = [1, 2, 3]
arr.length;   // 3
arr.length = 6;
arr;    // arr = [1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr;    // arr = [1, 2]

/*Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array*/
var arr = ['A', 'B', 'C'];
arr[1] = 99;
arr;   // arr = ['A', 99, 'C']

var arr = [1, 2, 3];
arr[5] = 'X';   //如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化
arr;    // arr = [1, 2, 3, undefined, undefined, undefined]
/*大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript的Array却不会有任何错误。在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。*/

//indexOf 与字符串indexOf()类似
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 0
arr.indexOf(30);   // -1
arr.indexOf('xyz'); // 3

//slice: slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0,3); //['A', 'B', 'C'] From index[0] to index[3](not included index[3])
arr.slice(3);   //form index[3] to the end ['D', 'E', 'F', 'G']

//copy
var arr = [1, 2, 3, 4, 5, 6];
var copy_arr = arr.slice();
copy_arr;   //[1, 2, 3, 4, 5, 6]
copy_arr === arr;   //true

/* push && pop */
var arr = [1, 2];
arr.push('A', 'B');
arr;    //[1, 2, 'A', 'B']
arr.pop();
arr;    //[1, 2,'A'], delete 'B'
arr.pop();
arr.pop();
arr.pop();
arr;    //[]
arr.pop();  //空数组继续pop不会报错，而是返回undefined
arr;    //[]

/* unshift && shift */
//unshift()方法: 将Array的头部添加元素
//shift()方法：将Array的第一个元素删掉
var arr = [1, 2];
arr.unshift('A', 'B');
arr;    // ['A', 'B', 1, 2]
arr.shift();    //
arr;    //['B', 1, 2]

/*sort:sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序*/
var arr = ['B', 'C', 'A'];
arr.sort();
arr;    //['A', 'B', 'C'];

/*reverse() 反转Array*/
var arr = [1, 2, 3];
arr.reverse();
arr; //[3, 2, 1]

/*splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素*/
var arr = [1, 2, 3, 4, 5, 6,7];
arr.splice(2, 3, 'A', 'C');  //从索引2开始删除3个元素，然后再索引2初添加'A' 'C'两个元素
arr;    //[1, 2, 'A', 'C', 6, 7]
arr.splice(2, 2);  // 只删除不添加
arr;    // [1, 2, 6, 7]
arr.splice(2, 0, 'A', 'C');  //只添加不删除

/*concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array*/
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3])
added;  //['A', 'B', 'C', 1, 2, 3]
arr;    //['A', 'B', 'C']
//concat()方法并没有修改当前Array，而是返回了一个新的Array

var arr = [1, 2, 3];
var add_arr = arr.concat([4, 5, [7, 8, 9]]);
add_arr;    //[1, 2, 3, 4, 5, 6, 7, 8, 9]
//concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array中

/*join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串*/
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('+');  //'A+B+C+1+2+3'

/*多维数组 数组中包含数组*/
var arr = [[1, 2, 3], '-', [4, 5, 6]];




