"use strict";
// virtual proxy & cache
class RealSubject {
    constructor() {
        this.enormousData = [1, 2, 3];
    }
    request() {
        return this.enormousData;
    }
}
class ProxySubject {
    constructor() {
        this.enormousData = [];
        this.realSubject = new RealSubject();
    }
    request() {
        if (this.enormousData.length === 0) {
            console.log("Pulling data from RealSubject");
            this.enormousData = this.realSubject.request();
            return this.enormousData;
        }
        console.log("Pulling data from ProxySubject");
        return this.enormousData;
    }
}
const PROXY_SUBJECT = new ProxySubject();
console.log(PROXY_SUBJECT.request());
console.log(PROXY_SUBJECT.request());
