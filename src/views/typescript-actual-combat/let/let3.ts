/*
 * @Desc: 
 * @date: 2020-09-10 22:13:38
 * @Author: Jeffrey Ma
 */
function func(arg){
    let arg = 2; //和参数arg重名
}
func("2");
//函数不能重名
function func(arg){
    {
        let arg2= arg + "2";
    }
}

func("3");