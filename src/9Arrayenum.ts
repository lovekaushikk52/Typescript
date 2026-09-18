//declaration of array

const chaiFlavours:string[]=["masala","adrak"]
const chaiPrice:number[]=[10,20]

const rating:Array<number>=[4.5,6]//in this way we can decllare both custom as well as primitive datatypes

//array of objects

type Chai={
    name:string;
    price:number
}
const menu:Chai[]=[

    {name:"masala chai",
     price:32
    },
    {name:"adrak",price:21}
]
console.log(menu)

//read only array
//we can declare readonly array only while declaring after declaration we can only read it
const cities:readonly string[]=["delhi","jaipur"]
//cities.push("mumbai")


//multidimensional arrays

const table:number[][]=[
    [1,2,3],
    [4,5,6]
]

//TUPLE

let chaiTuple:[string,number];
chaiTuple=["masala",20]
// chaiTuple=[20,"masala"]  //invalid coz order is changed

let userInfo:[string,number,boolean?]
userInfo=["hitesh",32]
userInfo=["love sharma",21,true]

//readonly tuple
const location:readonly[number,number]=[28.86,25]

//named tuple :mostly used

const chaiItems:[name:boolean,price:number]=[true,25]


//enum
enum cupSize{
    SMALL,
    MEDIUM,
    LARGE
}
const size=cupSize.LARGE

//enum automatic incrementaion

enum status{
    Pending=100,
    served,//101
    cancelled//102
}
const sate=status
console.log(sate.cancelled)

enum ChaiType{
    MASALA="masala",
    GINGER="ginger"
}

function makeChai(type:ChaiType){
    console.log(`Making ${type} chai`)
}

makeChai(ChaiType.GINGER)