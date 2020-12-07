/*
 * @Description: main.js
 * @Author: jeffreymakai
 * @Date: 2020-12-07 23:49:12
 * @LastEditTime: 2020-12-08 02:14:31
 * @LastEditors: jeffreymakai
 */

 require.config({
     paths:{
        jquery:"jquery-3.5.1.min"
     }
 });

 require(['jquery','moduleB'],function ($,moduleB) {
     console.log($)
     moduleB.showName();
     $('#mydiv').html('age='+moduleB.getAge());
 });
