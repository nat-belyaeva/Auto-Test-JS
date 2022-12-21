// Ещё в одном файле создать экземпляр класса В и вызвать метод класса A и класса B

import A from './task6.1.js'
import B from "./task6.2.js";

const class_A = new A("Nat", 38, "cat");
const class_B = new B("Sasha", 9, "dog", 147, "blue", "blonde" );

console.log(class_A);
console.log(class_B);

// methods class_A;
console.log(class_A.printName());
console.log(class_A.printAge());
console.log(class_A.printPet())

// methods class_A;
console.log(class_B.printName()); // inherited from Class A
console.log(class_B.printAge());  // inherited from Class A
console.log(class_B.printPet());  // inherited from Class A
console.log(class_B.getColorEyes());
console.log(class_B.getHeight());
console.log(class_B.getHair());


