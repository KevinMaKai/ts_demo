"use strict";
/*
 * @Description: 交叉类型
 * @Author: jeffreymakai
 * @Date: 2020-08-12 03:36:41
 * @LastEditTime: 2020-08-12 03:45:46
 * @LastEditors: jeffreymakai
 */
class Car {
    driverOnRoad() {
        console.log("can driver on road");
    }
}
class Ship {
    driverInWater() {
        console.log("can driver in water");
    }
}
let car = new Car();
let ship = new Ship();
let carShip = {};
carShip["driverOnRoad"] = car["driverOnRoad"];
carShip["driverInWater"] = ship["driverInWater"];
carShip.driverOnRoad(); //"can driver on road
carShip.driverInWater(); // can driver in water
