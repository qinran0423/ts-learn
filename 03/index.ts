// function greeter(fn: (a: string) => void) {
//   fn("Hello, World");
// }
 
// function printToConsole(s: string) {
//   console.log(s);
// }
 
// greeter(printToConsole);

// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
//   // ...
// }

// function printToConsole(s: string) {
//   console.log(s);
// }
 
// greeter(printToConsole);


// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(6));
// }

// function descibe() {
//   return true
// }

// descibe.description = '111'

// doSomething(descibe)


// type SomeConstructor = {
//   new (s: string): SomeObject;
// };
// function fn(ctor: SomeConstructor) {
//   return new ctor("hello");
// }

// TODO
// class someObject {
//   constructor(str: string) {}
// }

// fn(someObject)


// function firstElement(arr: any[]) {
//   return arr[0];
// }

// const strs = ['1', '2', '3']

// firstElement(strs)


// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }

// // s is of type 'string'
// const s = firstElement(["a", "b", "c"]);
// // n is of type 'number'
// const n = firstElement([1, 2, 3]);
// // u is of type undefined
// const u = firstElement([]);


// function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
//   return arr.map(func);
// }
 
// // Parameter 'n' is of type 'string'
// // 'parsed' is of type 'number[]'
// const parsed = map(["1", "2", "3"], (n) => parseInt(n));



// function longest<Type extends { length: number }>(a: Type, b: Type) {
//   if (a.length >= b.length) {
//     return a;
//   } else {
//     return b;
//   }
// }
 
// // longerArray is of type 'number[]'
// const longerArray = longest([1, 2], [1, 2, 3]);
// // longerString is of type 'alice' | 'bob'
// const longerString = longest("alice", "bob");
// // Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);


// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum };
//   }
// }
// // 'arr' gets value { length: 6 }
// const arr = minimumLength([1, 2, 3], 6);
// // and crashes here because arrays have
// // a 'slice' method, but not the returned object!
// console.log(arr.slice(0));


// function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
//   return arr1.concat(arr2);
// }

// const arr = combine<number | string>([1, 2, 3], ["hello"]); 


// function firstElement1<Type>(arr: Type[]) {
//   return arr[0];
// }
 
// function firstElement2<Type extends any[]>(arr: Type) {
//   return arr[0];
// }
 
// // a: number (good)
// const a1 = firstElement1([1, 2, 3]);
// // b: any (bad)
// const b = firstElement2([1, 2, 3]);

// function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
//   return arr.filter(func);
// }
 
// function filter2<Type, Func extends (arg: Type) => boolean>(
//   arr: Type[],
//   func: Func
// ): Type[] {
//   return arr.filter(func);
// }

// function greet<Str extends string>(s: Str) {
//   console.log("Hello, " + s);
// }
 
// greet("world");


// function greet(s: string) {
//   console.log("Hello, " + s);
// }

// function f(n: number) {
//   console.log(n.toFixed()); // 0 arguments
//   console.log(n.toFixed(3)); // 1 argument
// }


// declare function f(x?: number): void;

// f();
// f(10);
// f(undefined);

// function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }

// myForEach([1, 2, 3], (a) => console.log(a));
// myForEach([1, 2, 3], (a, i) => console.log(a, i));

// myForEach([1, 2, 3], (a, i) => {
//   console.log(i.toFixed());
// });


// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);



// function fn(x: string): void;
// function fn() {
//   // ...
// }
// // Expected to be able to call with zero arguments
// fn();