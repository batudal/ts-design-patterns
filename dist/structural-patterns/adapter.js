"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ClassBAdapter_classB;
class ClassA {
    methodA() {
        console.log("method A");
    }
}
class ClassB {
    methodB() {
        console.log("method B");
    }
}
class ClassBAdapter {
    constructor() {
        _ClassBAdapter_classB.set(this, void 0);
        __classPrivateFieldSet(this, _ClassBAdapter_classB, new ClassB(), "f");
    }
    methodA() {
        __classPrivateFieldGet(this, _ClassBAdapter_classB, "f").methodB();
    }
}
_ClassBAdapter_classB = new WeakMap();
// without adapter
const ITEMS = [new ClassA(), new ClassB()];
ITEMS.forEach((item) => {
    if (item instanceof ClassB) {
        item.methodB;
    }
    else {
        item.methodA;
    }
});
// with adapter
const ADAPTED = [new ClassA(), new ClassBAdapter()];
ADAPTED.forEach((item) => {
    item.methodA();
});
