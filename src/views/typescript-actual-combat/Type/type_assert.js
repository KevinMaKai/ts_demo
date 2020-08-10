"use strict";
/*
 * @Description: 类型断言
 * @Author: jeffreymakai
 * @Date: 2020-08-12 04:48:35
 * @LastEditTime: 2020-08-12 04:51:19
 * @LastEditors: jeffreymakai
 */
function getLength(a) {
    //if ((a as string).length){
    if (a.length) {
        return a.length;
    }
    else {
        return a.toString().length;
    }
}
console.log(getLength(6)); //1
console.log(getLength("hello")); //5
