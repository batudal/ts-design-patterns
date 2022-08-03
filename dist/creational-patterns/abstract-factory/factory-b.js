"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryB = void 0;
class ConcreteProduct {
    constructor() {
        this.name = "";
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = "FactoryB:ConcreteProductA";
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = "FactoryB:ConcreteProductB";
    }
}
class FactoryB {
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
exports.FactoryB = FactoryB;
