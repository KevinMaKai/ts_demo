/*
 * @Description: 类型别名
 * @Author: jeffreymakai
 * @Date: 2020-08-12 04:32:00
 * @LastEditTime: 2020-08-12 04:37:53
 * @LastEditors: jeffreymakai
 */

type myfunc = () => string;
type NameOrStringOrMyFunc = string | number | myfunc;
function getName(n: NameOrStringOrMyFunc):string{
    if(typeof n === "string"){
        return n;
    }else if(typeof n === "number"){
        return n.toString();
    }else{
        return n();
    }
}
let a :string = "hello";
let b :number = 999;
let c = function(){
    return "hello my func";
}
console.log(getName(a)); //hello
console.log(getName(b)); //999
console.log(getName(c)); //"hello my func"
