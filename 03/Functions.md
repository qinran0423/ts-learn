## Functions

#### 函数类型表达式

```js
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);
```

类型别名来命名函数类型

```js
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
```

#### Call Signatures呼叫签名

```js

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function descibe() {
  return true
}

descibe.description = '111'

doSomething(descibe)
```

#### Construct Signatures构造签名

函数也可以用新的操作符来调用。引用这些作为构造函数，因为它们通常会创建一个新对象。你可以通过在调用签名前面添加 new 关键字来写一个构造签名

```js
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

#### Generic Functions通用函数

通常编写一个函数，其中输入的类型与输出的类型相关，或者两个输入的类型以某种方式相关。

```js
function firstElement(arr: any[]) {
  return arr[0];
}

const strs = ['1', '2', '3']

firstElement(strs)

```

在 TypeScript 中，泛型用于描述两个值之间的对应关系

```js
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

```

##### Inference推论

###### 我们不必在这个示例中指定 Type。类型是ts自动推断选择的

```js

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

```

##### Constraints约束

有时候，我们希望关联两个值，但是只能对值的某个子集进行操作。在这种情况下，我们可以使用约束来限制类型参数可以接受的类型种类。

```js
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
 
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);

```

##### Working with Constrained Values使用约束值

```js
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
  }
}
// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));
```

##### Specifying Type Arguments指定类型参数

通常可以在泛型调用中推断预期的类型参数，但并不总是如此

```js
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine<number | string>([1, 2, 3], ["hello"]); 
```

#### 编写良好通用函数的指南

##### Push Type Parameters Down 下推类型参数

```js
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
 
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);
```

##### Use Fewer Type Parameters 使用更少的类型参数

```js
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
 
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

##### Type Parameters Should Appear Twice 类型参数应该出现两次

```js
function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}
 
greet("world");

//简单的版本

function greet(s: string) {
  console.log("Hello, " + s);
}
```

#### Optional Parameters可选参数

```js
function f(n: number) {
  console.log(n.toFixed()); // 0 arguments
  console.log(n.toFixed(3)); // 1 argument
}



function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK
```

##### Optional Parameters in Callbacks回调函数中的可选参数

```js
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));

// 有错
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
});
```

#### Function Overloads**函数过载**

在Ts中，我们可以通过写重载签名来指定一个可以以不同方式调用的函数

```js
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
```

