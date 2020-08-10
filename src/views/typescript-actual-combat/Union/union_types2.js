"use strict";
/*
 * @Description: 联合类型调用方法实例
 * @Author: jeffreymakai
 * @Date: 2020-08-12 04:11:21
 * @LastEditTime: 2020-08-12 04:24:04
 * @LastEditors: jeffreymakai
 */
class Car1 {
    driverOnRoad() {
        console.log("can driver on road");
    }
    toUpper(str) {
        return str.toUpperCase();
    }
}
class Ship1 {
    driverInWater() {
        console.log("can driver in water");
    }
    toUpper(str2) {
        return str2.toUpperCase();
    }
}
let car1 = new Car1();
let ship1 = new Ship1();
let carShip1 = {};
carShip1["driverOnRoad"] = car1["driverOnRoad"];
carShip1["driverInWater"] = ship1["driverInWater"];
carShip1["toUpper"] = ship1["toUpper"];
let str = carShip1.toUpper("hello world");
console.log(str);
// carShip1.driverOnRoad();//"can driver on road
// carShip1.driverInWater(); // can driver in water
carShip1.driverOnRoad(); // OK
carShip1.driverInWater(); //OK
