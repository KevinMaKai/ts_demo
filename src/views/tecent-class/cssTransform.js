/*
 * @Description: 
 * @Author: jeffreymakai
 * @Date: 2020-08-08 20:19:26
 * @LastEditTime: 2020-08-11 02:00:10
 * @LastEditors: jeffreymakai
 */
function cssTransform(ele,attr,val){
    
    if(!ele.transform){
        ele.transform = {};
    }
    
    //取值阶段
    if(typeof val==="undefined"){
        if(typeof ele.transform[attr] === "undefined"){
            switch(attr){
                case "scale":
                    ele.transform[attr] = 1;
                    break;
                default:
                    ele.transform[attr] = 0;
            }
        }
        return ele.transform[attr];

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
                case "rotate":
                case "rotateX":
                case "rotateY":
                    transformVal += " " + s + "("+(ele.transform[s]) +"deg)";
                    break; 
                default:
                    transformVal += " " + s + "(" + (ele.transform[s])+"px)";
                    
            }
            ele.style.webkitTransform = ele.style.transform = transformVal;
        }
    }
}