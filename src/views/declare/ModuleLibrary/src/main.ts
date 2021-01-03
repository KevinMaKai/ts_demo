/*
 * @Description: 
 * @Author: jeffreymakai
 * @Date: 2021-01-04 01:06:18
 * @LastEditTime: 2021-01-04 01:46:42
 * @LastEditors: jeffreymakai
 */
import {jYd} from "../mydefs/jYd";
let data:jYd.IAjaxData = {
    url:"/get",
    data:"a=2&b=2",
    callback:function(e){
        console.log(e);
    }
}
jYd.ajax.post(data);