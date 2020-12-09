/*
 * @Description: moduleB.js
 * @Author: jeffreymakai
 * @Date: 2020-12-10 02:46:29
 * @LastEditTime: 2020-12-10 02:54:20
 * @LastEditors: jeffreymakai
 */
System.register(["./moduleB.js"],function (exports_1,context_1) {
    "use strict";
    var moduleB_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (moduleB_1_1) {
                moduleB_1 = moduleB_1_1;
            }
        ],
        execute: function () {
            console.log(moduleB_1.func);
            moduleB_1.func.showName();
            $('#mydiv').html('age='+moduleB_1.func.getAge());
        }
    }
})