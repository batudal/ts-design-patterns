"use strict";
class SubSystemClassA {
    method() {
        return "A";
    }
}
class SubSystemClassB {
    method(value) {
        return value;
    }
}
class SubSystemClassC {
    method(value) {
        return value;
    }
}
class Facade {
    subSystemClassA() {
        return new SubSystemClassA().method();
    }
    subSystemClassB(value) {
        return new SubSystemClassB().method(value);
    }
    subSystemClassC(value) {
        return new SubSystemClassC().method(value);
    }
}
// directly
console.log(new SubSystemClassA().method());
console.log(new SubSystemClassB().method("B"));
console.log(new SubSystemClassC().method({ C: [1, 2, 3] }));
// thru facade
const facade = new Facade();
console.log(facade.subSystemClassA());
console.log(facade.subSystemClassB("B"));
console.log(facade.subSystemClassC({ C: [1, 2, 3] }));
