"use strict";
jQuery('#foo');
jQuery(function () {
    alert('Dom Ready!');
});
var cat = new Animal('Tom');
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
jQuery1.ajax('/api/get_something');
console.log(jQuery1.version);
var e = new jQuery1.Event();
e.blur(jQuery1.EventType.CustomClick);
jQuery1.fn.extend({
    check: function () {
        return this.each(function () {
            this.checked = true;
        });
    }
});
jQuery2.fn.extend({
    check: function () {
        return this.each(function () {
            this.checked = true;
        });
    }
});
Math.pow(10, 2);
document.addEventListener('click', function (e) {
    console.log(e.target);
});
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
    //do something
}
handleEvent(document.getElementById('hello'), 'scroll');
// handleEvent(document.getElementById('world'),'dbclick');
var tom;
tom = ['Tom', 25];
tom.push('male');
tom.push('true');
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
var obj = {
    name: "jack",
    age: 22
};
with (obj) {
    console.log(name);
    console.log(age);
}
