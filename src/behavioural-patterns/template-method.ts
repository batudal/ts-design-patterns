abstract class AbstractClass {
  stepOne(): void {}
  abstract stepTwo(): void;
  stepThree(): void {
    console.log("Step Three is a hook that prints this line by default.");
  }
  templateMethod() {
    this.stepOne();
    this.stepTwo();
    this.stepThree();
  }
}

class ConcreteClassA extends AbstractClass {
  stepTwo() {
    console.log("Class_A : Step Two (overridden)");
  }
}

class ConcreteClassB extends AbstractClass {
  stepOne() {
    console.log("Class_B : Step One (overridden)");
  }
  stepTwo() {
    console.log("Class_B : Step Two. (overridden)");
  }
  stepThree() {
    console.log("Class_B : Step Three. (overridden)");
  }
}

const CLASS_A = new ConcreteClassA();
CLASS_A.templateMethod();
const CLASS_B = new ConcreteClassB();
CLASS_B.templateMethod();
