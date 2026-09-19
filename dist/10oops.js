"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chai {
    flavour;
    price;
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }
}
const masalaChai = new Chai("ginger", 20);
masalaChai.flavour = "khatta meetha";
//access modifiers
class Chai2 {
    flavor = "masala chai";
    secretIngredients = "cardamom";
    reveal() {
        return this.secretIngredients; //ok
    }
}
const c = new Chai2();
console.log(c.reveal());
//inheritance
class Shop {
    shopname = "chai corner";
}
class branch extends Shop {
    getName() {
        return this.shopname;
    }
}
//readonly
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
//getter and setters
class modernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("meetha h kya bsdk");
        this._sugar = value;
    }
}
const m = new modernChai();
m.sugar = 3;
//static
class EkChai {
    flavour;
    static shopName = "chai aur code";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName); //ststic members are accessed directly by class
//abstract class
class Drink {
}
class Mychai extends Drink {
    make() {
        console.log("brewing chai....");
    }
}
//this points the new object which is most recently made
//private varibale can be made by adding # in start and also by _ in start
//class composition
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
//# sourceMappingURL=10oops.js.map