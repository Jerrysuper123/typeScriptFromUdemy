//primitve, number, string, boolean
//complex - arrays and objects
//function type and parameter

//primitive
let a: number = 3;
a = 3;

let b: string;
b = "hahah";

let isTrue: boolean = true;
isTrue = false;

let isFun: null;
//null type is not very useful
// isFun = "haha";

//more complex type
//variable is a array of number type
let arrayNumber: number[];
arrayNumber = [1, 3, 4, 5];

let people: {
    name: string;
    age: number;
};

people = {
    name: "jerry",
    age: 31
}

//must follow the type above
// people={
//     isHere: true;
// }

//variable is an array of object
let morePeople: {
    name: string;
    age: number;
}[];

morePeople = [{
    name: "Jerry",
    age: 32
}, {
    name: "Tom",
    age: 2
}]

//type inference, even when you did not declare type, but TS will infer from your declaration
//so we do not need explicitly state the type :string for example for below
let shoutOut = "Shout out loud";

//below will trigger error, because TS already infer "shoutOUt" variable as a string type
// shoutOut = 123;

//union types - a variable has one or more types
let course: number | string = "react course";
course = 123;


//type alias - save type definition and reuse later

type Fruit = {
    name: string;
    cost: number;
}

//reuse type definition
let fruit: Fruit;
let fruits: Fruit[];

fruits.push({
    name: "apple",
    cost: 23
})

//function para types and return type
//the return type is :number, but we do not need to type it out
function add(a: number, b: number): number {
    return a + b;
}

//return type is void, just like Java
//but we do not need to type out :void, because TS inference
function printOut(value: any): void {
    console.log(value)
}

//generics - function return type is generic - where it infers from the parameter making utility function more flexible

//normal f with any variable, 
// function merge(array: any[], value: any) {
//     const newArray = [value, ...array];
//     return newArray;
// }

// let demoArray = [1, 2, 3];
// const updatedArray = merge(demoArray, 0);
// //below is unable to catch error because you cannot split numbers
// updatedArray[0].split("");

//use generics to extend the flexibility of the function
function merge<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

let demoArray = [1, 2, 3];
const updatedArray = merge(demoArray, 0);
const stringArray = merge(["a", "b"], "c");
//below is unable to catch error because you cannot split numbers
updatedArray[0].split("");
stringArray[0].split("");

