/*
 * @Description: moduleB.js
 * @Author: jeffreymakai
 * @Date: 2020-12-10 02:46:29
 * @LastEditTime: 2020-12-10 02:52:20
 * @LastEditors: jeffreymakai
 */
System.register(["./moduleA.js"],function (exports_1,context_1) {
    "use strict";
    var moduleA_1,func;
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (moduleA_1_1) {
                moduleA_1 = moduleA_1_1;
            }
        ],
        execute: function () {
            func={
                showName:function () {
                    console.log(moduleA_1.obj.name);
                },
                getAge:function () {
                    return moduleA_1.obj.age;
                }
            };
            exports_1("func",func);
        }
    }
})