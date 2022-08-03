"use strict";
class ConcreteProduct {
    constructor() {
        this.name = "";
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = "ConcreteProductA";
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = "ConcreteProductB";
    }
}
class Creator {
    static createObject(someProperty) {
        if (someProperty === "a") {
            return new ConcreteProductA();
        }
        else {
            return new ConcreteProductB();
        }
    }
}
const PRODUCT = Creator.createObject("b");
console.log(PRODUCT.name);
