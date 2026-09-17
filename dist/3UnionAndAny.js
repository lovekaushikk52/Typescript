"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "1M"; //union
let apiRequestStatus = 'pending';
//  apiRequestStatus="love"//will give error coz we hv to give a value from 3 existing values
apiRequestStatus = "error";
let airlineSeat = 'aisle';
airlineSeat = 'window';
const orders = ['12', '13', '28', '42'];
let currentOrder;
//by default data type will be any which is a problem and we can add any datatype value in it so we hv to try not using any
for (let order of orders) {
    if (order === '28') {
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}
console.log(currentOrder);
// currentOrder=6
//# sourceMappingURL=3UnionAndAny.js.map