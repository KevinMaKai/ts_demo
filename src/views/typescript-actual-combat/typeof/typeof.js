"use strict";
/*
 * @Description: typeof运算符使用
 * @Author: jeffreymakai
 * @Date: 2020-09-12 18:50:05
 * @LastEditTime: 2020-09-12 18:58:49
 * @LastEditors: jeffreymakai
 */
let _a = 2;
console.log(typeof _a); //"number"
let _b = "hello";
console.log(typeof _b); //"string"
let _c = true;
console.log(typeof _c); //"boolean"
let d = null;
console.log(typeof d); //"object"
console.log(typeof undefinedVar); //未定义undefined
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Yellow"] = 2] = "Yellow";
})(Colors || (Colors = {}));
let color = Colors.Red;
console.log(typeof color); //"number"
let f = function () {
    console.log("hello world");
};
console.log(typeof f); //"function"
let g = [];
console.log(typeof g); //"object"
let m = [1, 2];
console.log(typeof m); //"object"
