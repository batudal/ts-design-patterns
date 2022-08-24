interface ICompositeComponent {
  name: string;
  referenceToParent?: Composite;
  method(): void;
  detach(): void;
}

class Leaf implements ICompositeComponent {
  referenceToParent?: Composite = undefined;
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  method(): void {
    const parent = this.referenceToParent ? this.referenceToParent.name : "none";
    console.log(`<Leaf>\t\tname:${this.name}\tParent:\t${parent}`);
  }
  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
    }
  }
}

class Composite implements ICompositeComponent {
  referenceToParent?: Composite;
  components: ICompositeComponent[];
  name: string;

  constructor(name: string) {
    this.name = name;
    this.components = [];
  }
  method(): void {
    const parent = this.referenceToParent ? this.referenceToParent.name : "none";
    console.log(`<Composite>\tname:${this.name}\tParent:\t${parent}\tComponents:${this.components.length}`);
    this.components.forEach((component) => {
      component.method();
    });
  }
  attach(component: ICompositeComponent): void {
    component.detach();
    component.referenceToParent = this;
    this.components.push(component);
  }

  delete(component: ICompositeComponent): void {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  detach(): void {
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }
}

const LEAF_A = new Leaf("leaf-a");
const LEAF_B = new Leaf("leaf-b");
const COMPOSITE_1 = new Composite("comp-1");
const COMPOSITE_2 = new Composite("comp-2");

COMPOSITE_1.attach(LEAF_A);
COMPOSITE_2.attach(LEAF_A);
COMPOSITE_2.attach(COMPOSITE_1);

LEAF_B.method();
COMPOSITE_2.method();
