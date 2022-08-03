"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryA = void 0;
class ConcreteProduct {
    constructor() {
        this.name = "";
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = "FactoryA:ConcreteProductA";
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = "FactoryA:ConcreteProductB";
    }
}
class FactoryA {
    static getObject(someProperty) {
        try {
            if (someProperty === "a") {
                return new ConcreteProductA();
            }
            else if (someProperty === "b") {
                return new ConcreteProductB();
            }
            else {
                throw new Error("Class Not Found");
            }
        }
        catch (e) {
            console.log(e);
        }
        return new ConcreteProduct();
    }
}
exports.FactoryA = FactoryA;
