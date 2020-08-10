/*
 * @Description: 
 * @Author: jeffreymakai
 * @Date: 2020-08-09 11:29:54
 * @LastEditTime: 2020-08-09 11:35:14
 * @LastEditors: jeffreymakai
 */
var symbol5 = ()=>{
    let s3 = Symbol('age');
    let s4 = String(s3);
    let s5 = Boolean(s3);
    console.log(s4);
    console.log(s5);
    let s6 = Number(s3);
    console.log(s6);
}

symbol5();