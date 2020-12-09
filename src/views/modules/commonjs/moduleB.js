/*
 * @Description: moduleB.js
 * @Author: jeffreymakai
 * @Date: 2020-12-10 01:00:23
 * @LastEditTime: 2020-12-10 01:02:01
 * @LastEditors: jeffreymakai
 */
var moduleA = require('./moduleA.js');
var func = {
    showName:function () {
        console.log(moduleA.name);
    },
    getAge:function () {
        return moduleA.age;
    }
};
module.exports= func;
