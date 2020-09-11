/*
 * @Desc: 
 * @date: 2020-09-11 09:51:24
 * @Author: Jeffrey Ma
 */
{
    let n:number=9;
    {
        let msg:string = 'hello world';
        let n:number=10;//不同块级作用域可以同名
    }
    console.log(msg);//报错，无法找到msg
}