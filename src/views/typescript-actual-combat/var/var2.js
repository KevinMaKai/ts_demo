"use strict";
/*
 * @Desc:
 * @date: 2020-09-11 09:50:11
 * @Author: Jeffrey Ma
 */
var msg = 'hello world';
for (var i = 0; i < msg.length; i++) {
    console.log(msg[i]);
}
console.log(i); //11
var msg = 'hello world';
for (let i = 0; i < msg.length; i++) {
    console.log(msg[i]);
}
console.log(i); //报错
