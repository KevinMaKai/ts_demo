/*
 * @Description: 
 * @Author: jeffreymakai
 * @Date: 2020-12-07 23:42:09
 * @LastEditTime: 2020-12-07 23:48:50
 * @LastEditors: jeffreymakai
 */
define([
    'moduleA'
], function(moduleA) {
    'use strict';
    return {
        showName: function () {
            console.log(moduleA.name);
        },
        getAge: function () {
            return moduleA.age;
        }
    }
});