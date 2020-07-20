"use strict";
/*
 * @Description: 第一个ts程序
 * @Author: jeffreymakai
 * @Date: 2020-07-17 01:08:30
 * @LastEditTime: 2020-07-21 01:08:04
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
// function test(name) {
//     alert('hello' + ' ' + name);
// }
// let testName='assistant'
// setTimeout(function () {
//     test(testName);
// }, 1000); //参数是函数名
// setTimeout('test(testName)',1000);


// const tasks = [];

// const output = (i) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log(i);
//         resolve();
//     }, 1000 * i);

// });

// //生成全部的异步操作
// for (var i = 0; i < 5; i++) {
//     tasks.push(output(i));
// }
// //同步操作完成后，输出最后的i
// Promise.all(tasks).then(() => {
//     console.log(i);
// })

// var len=4;
// while(len--){
// 　　var time=setTimeout(function(){
// 　　　　console.log(len); 
// 　　},0); 
// };
// console.log(time);
// var sss1 = function(value1,value2){
    
//     　　　　console.log(value1+"+"+value2);
    
//     　　　　console.log(value1+value2)};
//     function sss2  (value1,value2){
    
//         　　　　console.log(value1+"+"+value2);
        
//         　　　　console.log(value1+value2)};
// setTimeout( sss2, 2000,2,3)
// let param = 'Jack';
// setTimeout('test(param)',1000);
// function test(name) {
//     console.log('hello' + ' ' + name);
// }
// let testName='assistant'
// setTimeout( 
//     test 
//  , 1000); //可以获取到外层参数