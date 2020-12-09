/*
 * @Description: man.js
 * @Author: jeffreymakai
 * @Date: 2020-12-10 01:12:57
 * @LastEditTime: 2020-12-10 01:31:59
 * @LastEditors: jeffreymakai
 */
(function (factory) {
    console.log(define.amd)
    if(typeof module ==="object" && typeof module.exports==="object"){
        console.log(123)
        var v = factory(require,exports);
        if(v!==undefined)module.exports = v;
    }
    else if (typeof define ==="function" && define.amd){
        console.log(456)
        define(["require","exports","./moduleB"],factory);
    }
})(function (require,exports) {
    "use strict";
    exports.__esModule = true;
    console.log(require)
    var moduleB_1 = require("./moduleB");
    console.log(moduleB_1.func);
    moduleB_1.func.showName();
    $('#mydiv').html('age='+moduleB_1.func.getAge());
});