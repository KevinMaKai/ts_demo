jQuery('#foo');
jQuery(function(){
    alert('Dom Ready!');
});

let cat = new Animal('Tom');

let directions = [Directions.Up,Directions.Down,Directions.Left,Directions.Right];


jQuery1.ajax('/api/get_something');
console.log(jQuery1.version);
const e = new jQuery1.Event();
e.blur(jQuery1.EventType.CustomClick);

jQuery1.fn.extend({
    check:function () {
        return this.each(function(this:any){
            this.checked = true;
        })
    }
})

jQuery2.fn.extend({
    check:function () {
        return this.each(function(this:any){
            this.checked = true;
        })
    }
})

Math.pow(10, 2);
document.addEventListener('click',function(e){
    console.log(e.target);
})

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele:Element|null,event:EventNames){
    //do something
}

handleEvent(document.getElementById('hello'),'scroll');
// handleEvent(document.getElementById('world'),'dbclick');

let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
tom.push('true');

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

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


let obj = {
    name:"jack",
    age:22
}
with(obj){
    console.log(name);
    console.log(age);
}
