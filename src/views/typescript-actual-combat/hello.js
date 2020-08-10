"use strict";
/*
 * @Description: 第一个ts程序
 * @Author: jeffreymakai
 * @Date: 2020-07-17 01:08:30
<<<<<<< HEAD
 * @LastEditTime: 2020-08-10 09:14:11
=======
 * @LastEditTime: 2020-07-19 20:20:11
>>>>>>> 033e33a1a9768fd540fec2e6647df2d83e010ac6
 * @LastEditors: jeffreymakai
 */
// import s = require("./string_template");
function helloWorld(msg) {
    return "Hello, " + msg;
}
var msg = "My First TypeScript";
document.body.innerHTML = helloWorld(msg);
// document.body.innerHTML =s.msg1
// Array.prototype.map1 = function(func:Function,thisArg)  {
//     return this.reduce(
//      function(a,b,c,d){ 
//      a[c] = func.call(thisArg,b,c,d);
//      return a;} ,[])
// };
// let sss = ([1, 2, 4, 3].map1(i => i + 1));
// console.log(sss)
// document.body.innerHTML = sss;
// if (!Array.prototype.mapUsingReduce) {
//     Array.prototype.mapUsingReduce = function(callback, thisArg) {
//       return this.reduce(function(mappedArray, currentValue, index, array) {
//         mappedArray[index] = callback.call(thisArg, currentValue, index, array);
//         return mappedArray;
//       }, []);
//     };
//   }
//   console.log([1, 2, , 3].mapUsingReduce(
//     (currentValue, index, array) => currentValue + index + array.length
//   )); // [5, 7, , 10]
// document.body.innerHTML = [1,2,3,4].map1(i=>i+1);
function fun(name) {
    alert('hello' + ' ' + name);
}
setTimeout(function () {
    fun('Tom');
}, 1000); //参数是函数名
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}
timeout(2000).then((value) => {
    console.log(value);
});
let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});
promise.then(function () {
    console.log('resolved.');
});
console.log('Hi!');
let s;
s = 'seven';
s = 7;
// s.getName();
let uv = null;
// let uv2: null = undefined;
// let uv3: null =2;
let a = 3;
uv = a;
console.log(a);
let b1;
//返回never的函数
function error(message) {
    throw new Error(message);
}
//推断返回值类型为never
function fail() {
    return error("Something failed");
}
//返回never的函数必须存在无法结束
function infiniteLoop() {
    while (true) {
    }
}
let s1 = Symbol('name');
let s2 = Symbol('age');
console.log(s1); //Symbol(name)
console.log(s2); //Symbol(age)
console.log(s1.toString()); // "Symbol(name)"
console.log(s2.toString()); // "Symbol(age)"
let s3 = Symbol();
let s4 = Symbol();
console.log(s1 === s2); // false;
let s5 = Symbol('age');
let s6 = Symbol('age');
console.log(s5 === s6); // false;
let sym = Symbol("name");
let sym2 = Symbol("name");
let obj = {
    [sym]: "value",
    [sym2]: "value2",
    name: "value3"
};
console.log(obj);
/**
 * Object
 *    name: "value3"
 *    Symbol: "value"
 *    Symbol: "value2"
 */
// console.log(obj[sym]);
let s31 = Symbol('age');
// let s41 = s31+"是symbol";
// console.log(s41);
var Days;
(function (Days) {
    Days[Days["Sun"] = "S"] = "Sun";
    Days[Days["Mon"] = 2] = "Mon";
    Days[Days["Tue"] = 4] = "Tue";
    Days[Days["Wed"] = 5] = "Wed";
    Days[Days["Thu"] = 6] = "Thu";
    Days[Days["Fri"] = 7] = "Fri";
    Days[Days["Sat"] = 8] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"] === "S"); //true
console.log(Days["Mon"] === 2); //true
console.log(Days["Tue"] === 4); //true
console.log(Days["S"]); //Sun
