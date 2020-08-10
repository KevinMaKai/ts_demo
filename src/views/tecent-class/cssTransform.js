/*
 * @Description: 
 * @Author: jeffreymakai
 * @Date: 2020-08-08 20:19:26
 * @LastEditTime: 2020-08-09 10:53:17
 * @LastEditors: jeffreymakai
 */
function cssTransform(ele,attr,val){
    if(!ele.transform){
        ele.transform = {};
    }
    //取值阶段
    if(typeof val==="undefined"){
        if(typeof ele.transform[attr] =){

        }

    }else{
        //赋值阶段
        ele.transform[attr] = val;
        let transformVal = "";
        for(var s in ele.transform){
            switch(s){
                case "scale":
                case "scaleX":
                case "scaleY":
                    transformVal += " " + s + "("+(ele.transform[s]) +")";
                    break;
                case "totate":
                case "rotateX":
                case "rotateY":
                    transformVal += " " + s + "("+(ele.transform[s]) +")";
                    break; 
            }
        }
    }
}