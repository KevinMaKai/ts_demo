"use strict";
/*
 * @Description: Number wrapper type
 * @Author: jeffreymakai
 * @Date: 2020-09-12 19:15:54
 * @LastEditTime: 2020-09-12 19:24:32
 * @LastEditors: jeffreymakai
 */
let a111 = 2.8;
let b222 = new Number("2"); //ERROR
let c111 = new Number("2");
alert(c111); //2
let _d = new Number(3);
alert(_d); //3
let e = new Number(true);
alert(e); // 1
let f1 = new Number(false);
alert(f1); //0
let g1 = new Number("true");
alert(g1); //NaN
let h = new Number({});
alert(h); //NaN
let m11 = new Number(6);
alert(m11); //6
