/*
 * @Description: man.js
 * @Author: jeffreymakai
 * @Date: 2020-12-10 00:41:23
 * @LastEditTime: 2020-12-10 00:43:11
 * @LastEditors: jeffreymakai
 */
define(function(require,exports,module) {
    var moduleB = require('moduleB');
    console.log(moduleB);
    moduleB.showName();
    $('#mydiv').html('age='+moduleB.getAge());
})