interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
function swim(animal: Cat | Fish) {
    (animal as Fish).swim();
}

const tom: Cat = {
    name: 'Tom',
    run() { console.log('run') }
};
swim(tom);
// Uncaught TypeError: animal.swim is not a function`

// class ApiError extends Error {
//     code: number = 0;
// }
// class HttpError extends Error {
//     statusCode: number = 200;
// }

// function isApiError(error: Error) {
//     if (typeof (error as ApiError).code === 'number') {
//         return true;
//     }
//     return false;
// }

// function isApiError(error: Error) {
//     if (error instanceof ApiError) {
//         return true;
//     }
//     return false;
// }

interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}

// const foo: number = 1;
// foo.length =1;
// window.foo = 1;
(window as any).foo =1;
window['foo']=2;

function getCacheData(key:string):any {
    return (window as any).cache[key];
}
interface Cat{
    name:string;
    run():void;
}
const tom1 = getCacheData('tom') as Cat;
tom1.run();


// function getCacheData(key: string): any {
//     return (window as any).cache[key];
// }

// interface Cat {
//     name: string;
//     run(): void;
// }

// const tom: Cat = getCacheData('tom');
// tom.run();

// function getCacheData<T>(key: string): T {
//     return (window as any).cache[key];
// }

// interface Cat {
//     name: string;
//     run(): void;
// }

// const tom = getCacheData<Cat>('tom');
// tom.run();

interface Animal{
    name:string;
}
interface Cat{
    name:string;
    run():void;
}
let tom2:Cat={
    name:'Tom',
    run:()=>{console.log('run')}
};
let animal1 : Animal = tom2;

interface Animal{
    name:string;
}
interface Cat extends Animal{
    run():void;
}

// function toBoolean(something:any):boolean {
//     return something as boolean;
// }
function toBoolean(something:any):boolean {
        return Boolean(something);
    }
toBoolean(1);

// declare var jQuery: (selector: string) => any;

jQuery('#foo');

declare let jQuery1:any;