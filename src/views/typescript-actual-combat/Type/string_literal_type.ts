/*
 * @Description: 字符串字面量类型
 * @Author: jeffreymakai
 * @Date: 2020-08-12 04:42:28
 * @LastEditTime: 2020-08-12 04:48:17
 * @LastEditors: jeffreymakai
 */
type EventNames = 'click' | 'dbclick' | 'mousemove';
function handleEvent(ele:Element,event:EventNames){
    console.log(event);
}

let ele = document.getElementById('div')!;
handleEvent(ele,'click');
handleEvent(ele,'dbclick');
handleEvent(ele,'mousemove'); //ok
handleEvent(ele,'scroll'); //不存在