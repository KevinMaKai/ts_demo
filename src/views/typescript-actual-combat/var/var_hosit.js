"use strict";
/*
 * @Description: 变量提升
 * @Author: jeffreymakai
 * @Date: 2020-08-12 04:57:00
 * @LastEditTime: 2020-08-12 04:59:50
 * @LastEditors: jeffreymakai
 */
// code1
var myvar = '变量值';
console.log(myvar);
//code2
var myvar = '变量值';
(function () {
    console.log(myvar);
})();
//code3
var myvar = '变量值';
(function () {
    console.log(myvar); //undefined
    var myvar = '内部变量值';
})();
