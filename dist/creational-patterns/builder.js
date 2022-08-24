"use strict";
class Product {
    constructor() {
        this.parts = [];
    }
}
class Builder {
    constructor() {
        this.product = new Product();
    }
    buildPartA() {
        this.product.parts.push("a");
        return this;
    }
    buildPartB() {
        this.product.parts.push("b");
        return this;
    }
    buildPartC() {
        this.product.parts.push("c");
        return this;
    }
    getResult() {
        return this.product;
    }
}
class Director {
    static construct() {
        return new Builder().buildPartA().buildPartB().buildPartC().getResult();
    }
}
const PRODUCT1 = Director.construct();
console.log(PRODUCT1.parts);
