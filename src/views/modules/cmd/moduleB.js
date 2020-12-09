/*
 * @Description: moduleB.js
 * @Author: jeffreymakai
 * @Date: 2020-12-10 00:38:16
 * @LastEditTime: 2020-12-10 00:40:29
 * @LastEditors: jeffreymakai
 */
define(function (require,exports,module) {
    var moduleA = require("moduleA");
    module.exports = {
        showName:function () {
            console.log(moduleA.name);
        },
        getAge:function () {
            return moduleA.age;
        }
    }
});
