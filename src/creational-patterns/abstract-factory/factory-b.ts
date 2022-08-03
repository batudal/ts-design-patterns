export interface IProductB {
  name: string;
}

class ConcreteProduct implements IProductB {
  name = "";
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

export class FactoryB {
  static getObject(someProperty: string): IProductB {
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
