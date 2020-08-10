/*
 * @Description: transform组件封装，支持放大、旋转、位移等
 * @Author: jeffreymakai
 * @Date: 2020-08-08 21:09:20
 * @LastEditTime: 2020-08-09 00:20:03
 * @LastEditors: jeffreymakai
 */
//赋能
function Transform(element){
    var units = {},
        transform = '', //style transform内容
        transforms = Object.create(null), //没有原型链
        attrs = ['scaleX', 'rotate', 'translate', 'rotateX'];

        attrs.forEach(function(attr){
            if(attr.indexOf('scale')>=0){
                units[attr] = '';
                transforms[attr] = 1;
            }else{
                units[attr] = attr.indexOf('translate') >= 0? 'px' : 'deg';
                transforms[attr] = 0;
            }

            Object.defineProperty(element, attr, {
                get: function(){
                    return transforms[attr]
                },
                set: function(value){
                    transform = '';
                    transforms[attr] = value;
                    attrs.forEach(function(attr){
                        transform += attr + '(' + transforms[attr] + units[attr] + ')';
                    })
                    element.style.webkitTransform = element.style.transform = transform;
                }
            })
        })
}