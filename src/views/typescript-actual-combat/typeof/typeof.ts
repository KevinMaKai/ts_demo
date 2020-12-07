/*
 * @Description: typeof运算符使用
 * @Author: jeffreymakai
 * @Date: 2020-09-12 18:50:05
 * @LastEditTime: 2020-12-07 23:39:19
 * @LastEditors: jeffreymakai
 */

let _a:number=2;
console.log(typeof _a); //"number"
let _b:string="hello";
console.log(typeof _b); //"string"
let _c:boolean=true;
console.log(typeof _c); //"boolean"
let d=null;
console.log(typeof d); //"object"
console.log(typeof undefinedVar); //未定义undefined
enum Colors{
    Red,
    Green,
    Yellow
}
let color:Colors=Colors.Red;
console.log(typeof color); //"number"
let f=function(){
    console.log("hello world");
};
console.log(typeof f); //"function"
let g=[];
console.log(typeof g); //"object"
let m:number[] =[1,2];
console.log(typeof m); //"object"


console.log(typeof x); //声明之前不能调用
let x :number= 2;
console.log(typeof y); //undifined
var y:number=2;
