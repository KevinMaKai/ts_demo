/*
 * @Description: 类型断言
 * @Author: jeffreymakai
 * @Date: 2020-08-12 04:48:35
 * @LastEditTime: 2020-08-12 04:51:19
 * @LastEditors: jeffreymakai
 */
function getLength(a:string|number):number{
    //if ((a as string).length){
    if((<string>a).length){
        return (<string>a).length;
    } else {
        return a.toString().length;
    }
}

console.log(getLength(6)); //1
console.log(getLength("hello")); //5