/*
 * @Description: moduleB.js
 * @Author: jeffreymakai
 * @Date: 2020-12-10 03:02:08
 * @LastEditTime: 2020-12-10 03:03:20
 * @LastEditors: jeffreymakai
 */
import {obj} from './moduleA';
var func = {
    showName:function () {
        console.log(obj.name);
    },
    getAge:function () {
        return obj.age;
    }
};
export {func};