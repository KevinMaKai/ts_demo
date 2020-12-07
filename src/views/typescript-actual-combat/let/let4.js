"use strict";
/*
 * @Desc:
 * @date: 2020-09-10 22:22:08
 * @Author: Jeffrey Ma
 */
var tmp = 123;
if (true) {
    tmp = 'abc'; //块级作用域变量tmp在声明之前无法调用
    let tmp;
}
alert(tmp); //输出值为123，全局tmp与局部tmp不影响
