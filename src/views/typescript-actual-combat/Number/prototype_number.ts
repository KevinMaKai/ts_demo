/*
 * @Description: Number
 * @Author: jeffreymakai
 * @Date: 2020-09-12 19:46:35
 * @LastEditTime: 2020-09-12 19:49:12
 * @LastEditors: jeffreymakai
 */
interface Number{
    padLeft(chars:string,length:number):string;
}
Number.prototype.padLeft=function(chars:string,length:number):string{
    return (chars.repeat(length)+this)
};
let ab = 9;
console.log(a.padLeft("0",3)); //0009
