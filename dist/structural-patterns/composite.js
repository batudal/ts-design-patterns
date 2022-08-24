"use strict";
class Leaf {
    constructor(name) {
        this.referenceToParent = undefined;
        this.name = name;
    }
    method() {
        const parent = this.referenceToParent ? this.referenceToParent.name : "none";
        console.log(`<Leaf>\t\tname:${this.name}\tParent:\t${parent}`);
    }
    detach() {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
        }
    }
}
class Composite {
    constructor(name) {
        this.name = name;
        this.components = [];
    }
    method() {
        const parent = this.referenceToParent ? this.referenceToParent.name : "none";
        console.log(`<Composite>\tname:${this.name}\tParent:\t${parent}\tComponents:${this.components.length}`);
        this.components.forEach((component) => {
            component.method();
        });
    }
    attach(component) {
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    }
    delete(component) {
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }
    detach() {
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
