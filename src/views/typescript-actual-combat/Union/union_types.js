"use strict";
/*
 * @Description: 联合类型
 * @Author: jeffreymakai
 * @Date: 2020-08-12 03:50:50
 * @LastEditTime: 2020-08-12 04:10:18
 * @LastEditors: jeffreymakai
 */
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    return new Error(`参数为string或number,但传入'${padding}'.`);
}
console.log(padLeft("Hello World", 3)); //   Hello World
console.log(padLeft("Hello World", "__ ")); //__ Hello World
// console.log(padLeft("Hello World", true));//error
