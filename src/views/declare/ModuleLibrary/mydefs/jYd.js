/*
 * @Description: jyd.js 模块化样例 包含声明文件
 * @Author: jeffreymakai
 * @Date: 2021-01-04 00:07:33
 * @LastEditTime: 2021-01-04 00:45:10
 * @LastEditors: jeffreymakai
 */
"use strict";
Object.defineProperty(exports,'__esModule',{value:true});
var jYd;
(function (jYd) {
    var ajax;
    (function (ajax) {
        function post(data) {
            console.log("post data...");
            console.log(JSON.stringify(data));
            if(typeof data.callback === "function"){
                data.callback({code:1,msg:"",data:{}});
            }
            return "OK";
        }
        ajax.post = post;
        function get(data) {
            console.log("get data...");
            console.log(JSON.stringify(data));
            if(typeof data.callback === "function"){
                data.callback({code:1,msg:"",data:{}});
            }
            return "ok";
        }
        ajax.get = get;
    })(ajax=jYd.ajax || (jYd.ajax={}));
    var dom;
    (function (dom) {
        function getById(ele) {
            return document.getElementById(ele);
        }
        dom.getById = getById;
    })(dom = jYd.dom || (jYd.dom={}));
})(jYd = exports.jYd ||(exports.jYd = {}));