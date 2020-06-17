"use strict";
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
function swim(animal) {
    animal.swim();
}
var tom = {
    name: 'Tom',
    run: function () { console.log('run'); }
};
swim(tom);
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
// const foo: number = 1;
// foo.length =1;
// window.foo = 1;
window.foo = 1;
window['foo'] = 2;
function getCacheData(key) {
    return window.cache[key];
}
var tom1 = getCacheData('tom');
tom1.run();
var tom2 = {
    name: 'Tom',
    run: function () { console.log('run'); }
};
var animal1 = tom2;
// function toBoolean(something:any):boolean {
//     return something as boolean;
// }
function toBoolean(something) {
    return Boolean(something);
}
toBoolean(1);
// declare var jQuery: (selector: string) => any;
jQuery('#foo');
