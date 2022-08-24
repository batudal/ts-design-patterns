"use strict";
class Flyweight {
    constructor(code) {
        this.code = code;
    }
}
class FlyweightFactory {
    static getFlyweight(code) {
        if (!(code in FlyweightFactory.flyweights)) {
            FlyweightFactory.flyweights[code] = new Flyweight(code);
        }
        return FlyweightFactory.flyweights[code];
    }
    static getCount() {
        return Object.keys(FlyweightFactory.flyweights).length;
    }
}
FlyweightFactory.flyweights = {};
class AppContext {
    constructor(codes) {
        this.codes = [];
        for (let i = 0; i < codes.length; i++) {
            this.codes.push(codes.charCodeAt(i));
        }
    }
    output() {
        let ret = "";
        this.codes.forEach((c) => {
            ret = ret + String.fromCharCode(FlyweightFactory.getFlyweight(c).code);
        });
        return ret;
    }
}
const APP_CONTEXT = new AppContext("abracadabra");
console.log(APP_CONTEXT.output());
console.log(`abracadabra has ${"abracadabra".length} letters`);
console.log(`FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`);
