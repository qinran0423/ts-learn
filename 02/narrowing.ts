function padLeft(padding: number | string, input: string) {
  if(typeof padding === 'number') {
    return new Array(padding + 1).join(" ") + input;
  }

  return padding + input
}




function printAll(strs: string | string[] | null) {
  // if (typeof strs === "object") {
  if(Array.isArray(strs)) {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

// both of these result in 'true'
const a = Boolean("hello"); // type: boolean, value: true
const r = !!"world"; // type: true,    value: true


function printAll1(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}


function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}


function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
          
    y.toLowerCase();
          
  } else {
    console.log(x);
               
    console.log(y);
               
  }
}



function printAll2(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
                       
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
                   
    }
  }
}

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
 
// function move(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim();
//   }
 
//   return animal.fly();
// }




type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;
      
  } else {
    animal;
      
  }
}


function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}



let x = Math.random() < 0.5 ? 10 : "hello world!";
   
x = 1;
 
console.log(x);
           
x = "goodbye!";
 
console.log(x);

// x = true;



// const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
// const underWater1: Fish[] = zoo.filter(isFish);
// // or, equivalently
// const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// // The predicate may need repeating for more complex examples
// const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
//   if (pet.name === "sharkey") return false;
//   return isFish(pet);
// });
           



// interface Shape {
//   kind: "circle" | "square";
//   radius?: number;
//   sideLength?: number;
// }


// function getArea(shape: Shape) {
//   return Math.PI * shape.radius! ** 2;
// }


interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 

type Shape = Circle | Square | Triangle;

// function getArea(shape: Shape) {
//   if(shape.kind === 'circle') {
//     return Math.PI * shape.radius ** 2;
//   }
// }




function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
                        
    case "square":
      return shape.sideLength ** 2;
    
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}





// 1. typeof
// 2. if(true | false)
// 3. Equality narrowing
// 4. in
// 5. instanceof
// 
