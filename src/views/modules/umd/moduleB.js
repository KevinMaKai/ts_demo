/*
 * @Description: moduleb.js
 * @Author: jeffreymakai
 * @Date: 2020-12-10 01:12:57
 * @LastEditTime: 2020-12-10 01:32:16
 * @LastEditors: jeffreymakai
 */
(function (factory) {
    if(typeof module ==="object" && typeof module.exports==="object"){
        var v = factory(require,exports);
        if(v!==undefined)module.exports = v;
    }
    else if (typeof define ==="function" && define.amd){
        define(["require","exports","./moduleA"],factory);
    }
})(function (require,exports) {
    "use strict";
    exports.__esModule = true;
    var moduleA_1 = require("./moduleA");
    var func = {
        showName:function () {
            console.log(moduleA_1.obj.name);
        },
        getAge: function () {
            return moduleA_1.obj.age;
        }
    }
    exports.func = func;
});