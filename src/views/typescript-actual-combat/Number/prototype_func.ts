/*
 * @Description: prototype扩展
 * @Author: jeffreymakai
 * @Date: 2020-09-12 19:34:47
 * @LastEditTime: 2020-09-12 19:46:12
 * @LastEditors: jeffreymakai
 */
function people(id:string,name:string){
    this.id=id;
    this.name=name;
}
// class people{
//     name:string;
//     id:string;
//     constructor(id:string,name:string){
//         this.id=id;
//     this.name=name;
//     }
// }
var emp=new people("123","Smith");
var jack=new people("234","JACK");
people.prototype.email="smith@163.com";
people.prototype.walk=function(){
    console.log(this.name+" walk");
}
jack.email="jack@163.com";
console.log(emp.id); //123
console.log(emp.name); //Smith
console.log(emp.email); //smith@163.com
console.log(emp.walk()); //Smith walk
console.log(jack.id); //234
console.log(jack.email);//jack@163.com
console.log(jack.walk()); //jack walk
