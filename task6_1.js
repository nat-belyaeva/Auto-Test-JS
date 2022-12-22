/* 6.	Продемонстрировать работу с классами
      - Описать класс A с конструктором и несколькими методами*/

class A {
    constructor(name, age, pet) {
        this.name = name;
        this.age = age;
        this.pet = pet;
    }
        printName() {
            return (`Hello, I'm ${this.name}`);
        }
        printAge() {
            return (`I'm ${this.age}`);
        }
        printPet() {
            return (`My favorite pet is ${this.pet}`)
        }

}

export default A;

