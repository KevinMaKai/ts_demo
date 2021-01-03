"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.walk = function () {
        console.log(this.name + ' walk');
    };
    Person.prototype.eat = function () {
        console.log(this.name + ' eating');
    };
    return Person;
}());
exports.Person = Person;
