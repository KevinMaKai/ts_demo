"use strict";
/*
 * @Desc:
 * @date: 2020-09-11 09:51:24
 * @Author: Jeffrey Ma
 */
{
    let n = 9;
    {
        let msg = 'hello world';
        let n = 10; //不同块级作用域可以同名
    }
    console.log(msg); //报错，无法找到msg
}
