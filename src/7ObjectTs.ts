const chai={
    name:"masala chai",
    price:20,
    isHot:true
}

//inference

// {
//     name:string;
//     price:number;
//     isHot:boolean
// }

//object declaration:
// we have to use semicolon while declaration the type of object

let tea:{
   name:string;
   price:number;
   isHot:boolean 
}

tea={
    name:"Ginger Tea",
    price:25,
    isHot:true
}

//type alias A type alias lets you give a custom name to a type. It makes complex types easier to reuse and understand.

type Tea={
    name:string;
    price:number;
    ingredients:string[]
}

const adrakChai:Tea={
    name:"adrak chai",
    price:24,
    ingredients:["ginger","tea leaves"]
}


type Cup={size:string};
let smallCup:Cup={size:"200ml"}

let bigCup={size:"500ml",material:"steel"}

smallCup=bigCup //it will not give a problem as small cup is havinga  property of cup plus an extra property

type brew={brewTime:number}
const coffee={brewTime:5,beans:"arabica"}
const chaiBrew:brew=coffee

type User={
    username:string;
    password:string;
}

const u:User={
    username:"lovekaushik",
    password:"123" //we have to give both values as thesse are present in user
}

//data types splitting out

type Item={name:string,quantity:number}
type Address={street:string,pin:number}

type Order={
    id:string;
    items:Item[],
    address:Address
}

type Chai={
    name:string;
    price:number;
    isHot:boolean
}
//we can change partial value:ie one value
const updateChai=(updates:Partial<Chai>)=>{
    console.log("updating chai with",updates)
}

updateChai({price:25})

//here we make these optional
type ChaiOrder={
    name?:string;
    quantity?:number
}

//but coz of using required we have to use both parameter
const placeOrder=(order:Required<ChaiOrder>)=>{
    console.log(order)
}

placeOrder({
    name:"masala chai",
    quantity:2
})


//pick
type Pani={
    name:string;
    price:number;
    isHot:boolean;
    ingredients:string[];
}

type BasicPaniInfo=Pick<Pani,"name"|"price">

const paniInfo:BasicPaniInfo={
    name:"Bisleri",
    price:30
}

//omit