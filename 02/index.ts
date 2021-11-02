
// 断言类型
// 1. 
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// // 2. 尖括号语法
// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");



let changjingString = "Hello World"
changjingString = "Olá Mundo"
 
var change = 'randy'


const constantString = "Hello World";
// constantString = '123'


function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}

printText("Hello, world", "left");
printText("G'day, mate", "centre");

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}



type cboo = true | false


const obj = { counter: 0 };
if (true) {
  obj.counter = 1;
}


// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method as "GET");

// function handleRequest(url: string, method: "GET" | "POST") {
// }


const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method );

function handleRequest(url: string, method: "GET" | "POST") {
}


// 定义变量
// const -> 字面量
// let var object -> string


function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }

  // console.log("Hello, " + x.toUpperCase());

}



function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}


enum UserResponse {
  No = 0,
  Yes = 1
}