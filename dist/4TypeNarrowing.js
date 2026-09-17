"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai....`;
    }
    return `Chai order ${kind}`;
}
//truthiness
function serveChai(msg) {
    if (msg) { //type narrowing
        return `serving ${msg}`;
    }
    return 'serving default masala chai';
}
//exhaustive checking
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai...`;
    }
    if (size === 'medium' || size === 'large') {
        return "make extra chai";
    }
    return `chai order number:${size}`;
}
//Guard checking and typeGuard
class KulhadChai {
    serve() {
        return `Kulhad chai`;
    }
}
class Cutting {
    serve() {
        return `Seving Cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve(); // we are sure that the mehod of kulhad chai will run
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.type === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `serving custom chai: ${item}`;
}
//# sourceMappingURL=4TypeNarrowing.js.map