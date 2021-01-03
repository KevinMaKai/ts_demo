/*
 * @Description: Person.ts
 * @Author: jeffreymakai
 * @Date: 2020-12-15 01:24:16
 * @LastEditTime: 2020-12-15 01:27:32
 * @LastEditors: jeffreymakai
 */
import {IPerson} from './IPerson';
class Person implements IPerson{
    walk(){
        console.log(this.name+' walk');
    }
    eat(){
        console.log(this.name+' eating');
    }
    constructor(name:string){
        this.name=name;
    }
    id:string;
    name:string;
    age:number;
}

export {Person};//导出模块