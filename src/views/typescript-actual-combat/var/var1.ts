/*
 * @Desc: 
 * @date: 2020-09-11 09:44:31
 * @Author: Jeffrey Ma
 */
var msg: string = "外部变量";
function func(){
    console.log(msg)
    if(false){
        var msg:string="内部变量";
    }
}
func();//undifined