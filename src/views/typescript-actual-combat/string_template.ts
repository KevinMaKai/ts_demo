/*
 * @Description: 模板字符串
 * @Author: jeffreymakai
 * @Date: 2020-07-18 14:04:47
 * @LastEditTime: 2020-07-18 17:22:53
 * @LastEditors: jeffreymakai
 */
let name1:string = "JackYunDi";
let age:number = 2;
let msg1:string = `今年${name1}已经${age}岁了`;//模板字符串示例
let b = `
    hello typescript
    hello world
    `;//多行文本


module.exports = {
    msg1:msg1,
    b:b
}
// export = {msg1,b}