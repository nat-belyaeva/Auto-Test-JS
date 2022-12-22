// В другом файле описать класс B с несколькими методами, унаследовать его от класса A

import A from './task6_1.js';
class B extends A {
    constructor(name, age, pet, height, eyes, hair) {
        super(name, age, pet);
        this.height = height;
        this.eyes = eyes;
        this.hair = hair;
    }

    getHeight(){
        return `My height is ${this.height}`
    }
    getColorEyes(){
        return `My eyes are ${this.eyes}`
    }
    getHair() {
        return `My hair is ${this.hair}`
    }
}

export default B;