'use strict';
/*在一个对象中绑定函数，称为这个对象的方法。*/
var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
};

/*但是，如果我们给xiaoming绑定一个函数，就可以做更多的事情。比如，写个age()方法，返回xiaoming的年龄*/
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;      // this关键字一个特殊变量，它始终指向当前对象，xiaoming
    }
};

xiaoming.age;   // function xiaoming.age()
xiaoming.age();  // 今年调用是27,明年调用就变成28了

/* this */
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age();  //  27
getAge();   // NaN
/*JavaScript的函数内部如果调用了this，那么这个this指向视情况而定。
如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。
    如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。
    要保证this指向正确，必须用obj.xxx()的形式调用！*/

// fixed  用一个that变量首先捕获this

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this;

        function getAgeFroomBirtg() {
            var y = new Date().getFullYear();
            return y - that.birth;  // 用that而不是this
        }

        return getAgeFroomBirtg();
    }
};

xiaoming.age(); // 27
/*用var that = this;，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。*/

/* apply 指定函数的this指向哪个对象，可以使用函数本身的apply方法。
它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。*/

// use apply() fix getAge()
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge()
};

xiaoming.age();     // 27
getAge().apply(xiaoming, []);   // 27, this指向xiaoming, 参数为空

/* 另一个与apply()类似的方法是call()，唯一区别是：apply()把参数打包成Array再传入；call()把参数按顺序传入。*/

Math.max.apply(null, [3, 4, 5]);    // 5
Math.max.call(null, 3, 4, 5);   // 5