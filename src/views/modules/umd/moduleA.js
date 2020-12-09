/*
 * @Description: moduleA.js
 * @Author: jeffreymakai
 * @Date: 2020-12-10 01:12:57
 * @LastEditTime: 2020-12-10 01:18:10
 * @LastEditors: jeffreymakai
 */
(function (factory) {
    if(typeof module ==="object" && typeof module.exports==="object"){
        var v = factory(require,exports);
        if(v!==undefined)module.exports = v;
    }
    else if (typeof define ==="function" && define.amd){
        define(["require","exports"],factory);
    }
})(function (require,exports) {
    "use strict";
    exports.__esModule = true;
    var obj = {
        name:'Jack',
        age:31
    };
    exports.obj = obj;
});