"use strict";
/*
 * @Desc:
 * @date: 2020-09-11 09:44:31
 * @Author: Jeffrey Ma
 */
var msg = "外部变量";
function func() {
    console.log(msg);
    if (false) {
        var msg = "内部变量";
    }
}
func(); //undifined
