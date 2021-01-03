/*
 * @Description: jYd.t.ds jYd自定义函数 jYd.js的声明文件
 * @Author: jeffreymakai
 * @Date: 2021-01-04 00:45:39
 * @LastEditTime: 2021-01-04 01:03:52
 * @LastEditors: jeffreymakai
 */
export declare namespace jYd{
    interface IAjaxData{
        url:string;
        data:string;
        callback:(e:any)=>any;
    }
    /**
     * @description: ajax工具 
     * @param : 
     * @return {type} 
     */    
    namespace ajax{
        /**
         * @description: 发送ajax post请求
         * @param : data post数据
         * @return {type} 
         */        
        function post(data:IAjaxData):string;

        /**
         * @description: 发送ajax get请求 
         * @param : data get数据
         * @return {type} 
         */        
        function get(data:IAjaxData):string;
    }

    namespace dom{
        function getById(ele:string):any
    }
}
