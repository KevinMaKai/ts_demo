/*
 * @Description: 第一个ts程序
 * @Author: jeffreymakai
 * @Date: 2020-07-17 01:08:30
 * @LastEditTime: 2020-07-19 20:20:11
 * @LastEditors: jeffreymakai
 */ 
// import s = require("./string_template");
function helloWorld(msg:string){
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

function fun(name:string){
    alert('hello'+' '+name);
  }
  setTimeout (function(){
    fun('Tom');
  },1000);//参数是函数名