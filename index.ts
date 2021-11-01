// const message = "message"

// message()


// const user = {
//   name: 'Daniel',
//   age: 26
// }

// const names = ["Alice", "Bob", "Eve"];

// names.forEach(function (s) {
//   console.log(s.toUppercase());
// });

// names.forEach((s) => {
//   console.log(s.toUppercase());
// });

// function printCoord(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 3, y: 7 });


// function printName(obj: { first: string; last?: string }) {
//   // ...
// }
// // Both OK
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });

// function printId(id: number | string) {
//   console.log("Your ID is: " + id);
// }
// // OK
// printId(101);
// // OK
// printId("202");
// // Error
// printId({ myID: 22342 });

// function printId(id: number | string) {
//   // console.log(id.toUpperCase());
//   if (typeof id === "string") {
//     // In this branch, id is of type 'string'
//     console.log(id.toUpperCase());
//   } else {
//     // Here, id is of type 'number'
//     console.log(id);
//   }
// }

// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler " + x);
//   }
// }