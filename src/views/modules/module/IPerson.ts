/*
 * @Description: IPerson.ts
 * @Author: jeffreymakai
 * @Date: 2020-12-15 01:23:10
 * @LastEditTime: 2020-12-15 01:24:08
 * @LastEditors: jeffreymakai
 */
export interface IPerson{
    id:string;
    name:string;
    age:number;
    walk();
    eat();
}