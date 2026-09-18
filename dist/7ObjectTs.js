"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
};
//inference
// {
//     name:string;
//     price:number;
//     isHot:boolean
// }
//object declaration:
// we have to use semicolon while declaration the type of object
let tea;
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
};
const adrakChai = {
    name: "adrak chai",
    price: 24,
    ingredients: ["ginger", "tea leaves"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup; //it will not give a problem as small cup is havinga  property of cup plus an extra property
const coffee = { brewTime: 5, beans: "arabica" };
const chaiBrew = coffee;
const u = {
    username: "lovekaushik",
    password: "123" //we have to give both values as thesse are present in user
};
//we can change partial value:ie one value
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
updateChai({ price: 25 });
//but coz of using required we have to use both parameter
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "masala chai",
    quantity: 2
});
const paniInfo = {
    name: "Bisleri",
    price: 30
};
//omit
//# sourceMappingURL=7ObjectTs.js.map