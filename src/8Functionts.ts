function makeChai(type:string,cups:number){
    console.log(`Making ${cups} cups of ${type} chai`);  
}

makeChai("masala",2)

//declaring return type of an function

function getPrice():number{
    return 25
}

function makeOrder(order:string){
    if(!order) return null
    return order
}

function logChai():void{ //void means will not return anything
    console.log("chai is ready")
}
logChai()


//optional aur default parameter
function OrderChai(type?:string){ //optional

}

//default
function OederChai2(type:string="masala"){

}

//complex datatype
function createChai(order:{
    type:string;
    price:number;
    size:"small"|"large"
}):number {
    return 4;
}