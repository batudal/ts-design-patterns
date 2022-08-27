class ObjectContext {
  request(strategy: IStrategyConstructor) {
    return new strategy();
  }
}

interface IStrategyConstructor {
  new (): IStrategy;
}

interface IStrategy {
  method(): string;
}

class ConcreteStrategyA implements IStrategy {
  method() {
    return "I am ConcreteStrategyA";
  }
}
class ConcreteStrategyB implements IStrategy {
  method() {
    return "I am ConcreteStrategyB";
  }
}

const OBJECT_CONTEXT = new ObjectContext();
console.log(OBJECT_CONTEXT.request(ConcreteStrategyA).method());
console.log(OBJECT_CONTEXT.request(ConcreteStrategyB).method());
