// const x = 0;
// const y = 0;

// const Point = {
//   x,
//   y
// }


// type ran = {
//   name: string,
//   age: number
// }

// type Point = {
//   x: number;
//   y: number;
// };

// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });


// type UserInputSanitizedString = string;

// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }

// // Create a sanitized input
// let userInput = sanitizeInput(getInput());

// // Can still be re-assigned with a string though
// userInput = "new input";

// interface Animal {
//   name: string
// }

// interface Bear extends Animal {
//   honey: boolean
// }

// const bear = getBear()
// bear.name
// bear.honey

// type Animal = {
//   name: string
// }

// type Bear = Animal & { 
//   honey: boolean 
// }

// const bear = getBear();
// bear.name;
// bear.honey;


// interface Window {
//   title: string
// }

// interface Window {
//   ts: TypeScriptAPI
// }

// const src = 'const a = "Hello World"';
// window.ts.transpileModule(src, {});



interface Window {
  qr: string
}

window.qr = 'qinran'