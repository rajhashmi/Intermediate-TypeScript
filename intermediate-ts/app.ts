interface User{
    name:string
};
interface User{
    age: number
};

// TypScript will merge the two interfaces

const user: User = {
    name:'shahid',
    age: 19
};

// 2. same thing will happen in NameSpace

namespace Validation{
    export function validation(){console.log("hi")}
}
namespace Validation{
    export function validateEmail(){
        console.log("hi");
    }
};
// Both function are accessible via validation namespace
Validation.validation();
Validation.validateEmail();


// decalaration merging refers to abiliy of the compiler to merge multiple declaration with same name into a single defination. this is particularly useful when working with interface,namespace, clasess and enums

// =======================================================================

// we can  import and export modules in JS


// import { strawberry, raspberry } from "./berries"
// import kiwi from "./kiwi" // default import
// export function makeFruitSalad() {} // named export
// export default class FruitBasket {} // default export
// export { lemon, lime } from "./citrus"


// NOTE to import and export n TS we need to turn on one flag allowSyntheticDefaultImport

// Thankfully we have another option here — the use of an older module loading API that imports the code properly, and matches up the type information as well

// function createBanana() {
//     return { name: "banana", color: "yellow", mass: 183 }
//   }
   
//   // equivalent to CJS `module.exports = createBanana`
//   export = createBanana
//   ////////////////////////////////////////////////////////
//   // @filename: smoothie.ts
   
//   import createBanana = require("./fruits")
//   const banana = createBanana()





//  Importaing non-TS thing

// import img from "./file.png"
// Cannot find module './file.png' or its corresponding type declarations.

// This can be accomplished through a module declaration as shown below

// @filename: global.d.ts
// declare module "*.png" {
//     const imgUrl: string
//     export default imgUrl
//   }
//   // @filename: component.ts
//   import img from "./file.png"

// ===================================================  Type Queries  =======================================

// keyof  

interface Person{
    names: string;
    age: number;
    email: string;
}

type PersonKey = keyof Person;

const person: Person = {
    names: "Shahid",
    age: 19,
    email: "shahidhashmi@gamil.com"
}

function getProperty(obj:Person, key: keyof Person){
    return obj[key];
}

console.log(getProperty(person, "names")); // Shahid
console.log(getProperty(person, "age")); // 19


//  ====================================================== Conditional Types  ============================================

// Ternary operator with values

const x= 16;
const isNegative = x >= 0 ? "no" : "yes";
// ``` condition ? returnifTRUE : returnFALSE ```

//  extract 

//  extract is not build in in TS it is a utality in ts

// if we have two interface and you want to extract the same property from that we can you extract utility 
interface Dog {
    name: string;
    age: number;
    breed: string;
}

interface Cat {
    name: string;
    age: number;
    color: string;
    breed?: string; // Adding optional 'breed' property to Cat
}
type ExtractedType = Extract<Dog, {age:number}>;



//  =================================================== Indexed Access Types ==============================================


interface Car {
    make: string
    model: string
    year: number
    color: {
      red: string
      green: string
      blue: string
    }
  }

let carColor: Car["color"];  // this is valid ✔️
let carColor2: Car.color;  // this is not valid ❌
let carColor3: Car["not-someting-on-car"];//  ❌
let carColor4: Car["color"]["red"] // this is valid ✔️
//  you can pass or “project” a union type (|) through Car as an index, as long as all parts of the union type are each a valid index
let carProperty: Car["color" | "year"]


//  ======================================================  Mapped Types  =======================================

// Mapped types are a powerful 