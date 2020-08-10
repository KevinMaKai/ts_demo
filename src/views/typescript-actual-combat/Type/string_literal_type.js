"use strict";
function handleEvent(ele, event) {
    console.log(event);
}
let ele = document.getElementById('div');
handleEvent(ele, 'click');
handleEvent(ele, 'dbclick');
handleEvent(ele, 'mousemove'); //ok
handleEvent(ele, 'scroll'); //不存在
