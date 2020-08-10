/*
 * @Description: 
 * @Author: jeffreymakai
 * @Date: 2020-08-11 02:02:32
 * @LastEditTime: 2020-08-11 02:11:07
 * @LastEditors: jeffreymakai
 */
HTMLElement.prototype.cssTransform = function(prop,value){
    var transform,
        transformValue = "";
        if(this.transform === undefined){
            this.transform = transform = Object.create(null);
        }
        //赋值阶段
        if(value!== undefined){
            this.transform[prop] = value;
            transform = this.transform;
            for(var s in transform){
                switch(s){
                    case "scale":
                    case "scaleX":
                    case "scaleY":
                        transformValue += " " + s + "("+(this.transform[s]) +")";
                        break;
                    case "rotate":
                    case "rotateX":
                    case "rotateY":
                        transformValue += " " + s + "("+(this.transform[s]) +"deg)";
                        break; 
                    default:
                        transformValue += " " + s + "(" + (this.transform[s])+"px)";
                        
                }
                this.style.webkitTransform = this.style.transform = transformValue;
            }
        }else{
            //取值
            return this.transform[prop];
        }
}