"use strict";
//declaration of array
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["masala", "adrak"];
const chaiPrice = [10, 20];
const rating = [4.5, 6]; //in this way we can decllare both custom as well as primitive datatypes
const menu = [
    { name: "masala chai",
        price: 32
    },
    { name: "adrak", price: 21 }
];
console.log(menu);
//read only array
//we can declare readonly array only while declaring after declaration we can only read it
const cities = ["delhi", "jaipur"];
//cities.push("mumbai")
//multidimensional arrays
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
//TUPLE
let chaiTuple;
chaiTuple = ["masala", 20];
// chaiTuple=[20,"masala"]  //invalid coz order is changed
let userInfo;
userInfo = ["hitesh", 32];
userInfo = ["love sharma", 21, true];
//readonly tuple
const location = [28.86, 25];
//named tuple :mostly used
const chaiItems = [true, 25];
//enum
var cupSize;
(function (cupSize) {
    cupSize[cupSize["SMALL"] = 0] = "SMALL";
    cupSize[cupSize["MEDIUM"] = 1] = "MEDIUM";
    cupSize[cupSize["LARGE"] = 2] = "LARGE";
})(cupSize || (cupSize = {}));
const size = cupSize.LARGE;
//enum automatic incrementaion
var status;
(function (status) {
    status[status["Pending"] = 100] = "Pending";
    status[status["served"] = 101] = "served";
    status[status["cancelled"] = 102] = "cancelled"; //102
})(status || (status = {}));
const sate = status;
console.log(sate.cancelled);
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making ${type} chai`);
}
makeChai(ChaiType.GINGER);
//# sourceMappingURL=9Arrayenum.js.map