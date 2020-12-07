/*
 * @Description: Number wrapper type
 * @Author: jeffreymakai
 * @Date: 2020-09-12 19:15:54
 * @LastEditTime: 2020-09-12 19:24:32
 * @LastEditors: jeffreymakai
 */

 let a111:number=2.8;
let b222:number = new Number("2"); //ERROR
let c111:Number = new Number("2");
alert(c111); //2
let _d:Number = new Number(3);
alert(_d); //3
let e:Number = new Number(true);
alert(e); // 1
let f1:Number = new Number(false);
alert(f1); //0
let g1:Number = new Number("true");
alert(g1); //NaN
let h:Number = new Number({});
alert(h); //NaN
let m11:Number = new Number(6);
alert(m11); //6

