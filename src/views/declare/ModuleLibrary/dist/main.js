"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jYd_1 = require("../mydefs/jYd");
var data = {
    url: "/get",
    data: "a=2&b=2",
    callback: function (e) {
        console.log(e);
    }
};
jYd_1.jYd.ajax.post(data);
//# sourceMappingURL=main.js.map