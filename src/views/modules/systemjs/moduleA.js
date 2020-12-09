/*
 * @Description: moduleA.js
 * @Author: jeffreymakai
 * @Date: 2020-12-10 02:46:29
 * @LastEditTime: 2020-12-10 03:00:20
 * @LastEditors: jeffreymakai
 */
System.register([],function (exports_1,context_1) {
    "use strict";
    var obj;
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function () {
            obj={
                name:'Jack',
                age:31
            };
            exports_1("obj",obj);
        }
    }
})