export interface IProductA {
  name: string;
}

class ConcreteProduct implements IProductA {
  name = "";
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

export class FactoryA {
  static getObject(someProperty: string): IProductA {
    try {
      if (someProperty === "a") {
        return new ConcreteProductA();
      } else if (someProperty === "b") {
        return new ConcreteProductB();
      } else {
        throw new Error("Class Not Found");
      }
    } catch (e) {
      console.log(e);
    }
    return new ConcreteProduct();
  }
}
