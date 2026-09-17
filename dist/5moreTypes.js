"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericLength = response.length; //forceful type assertion (in case of any we have to declare the typeof variable many times)
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString); //forceful assertion
console.log(bookObject);
// typescript contains datatype of mostly everything
// const inputElement=document.getElementById("username")as HTMLInputElement //type assertion
//difference between unknown and any
let value;
value = "rishu";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
let newValue;
newValue = "rishu";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase() // gives error
//type safety
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
//in case of try and catch block
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("error", error);
}
//forcing
const data = "chai aur code";
const strData = data; //forcing
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to the admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("redirecting to the user dashboard");
        return;
    }
    role; //role =never coz it shouldnt be used as we have already tried and used all the possible cases
    //for example if we use 3rd role as superadmin then this role will give superadmin
}
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=5moreTypes.js.map