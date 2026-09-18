type chaiOrder={
    type:string;
    sugar:number;
    strong:boolean
}
//in case of repetition we can assign paremeter like this which will increase code readability

function makeChai(order:chaiOrder){
    console.log(order)
}

function servechai(order:chaiOrder){
    console.log(order)
}

// whenever we have to implement anything inside classes we shud make interface by default

type teaRecipe= {
    water:number,
    milk:number,
}

// class MasalaChai implements teaRecipe{
//     water= 100;
//     milk=50
// }

// class can only implements the object and intersection of pbject type
// type CupSize="small"|'large' give error so we have to create an interface
interface CupSize{
    size:'small'|'large'
}

class chai implements CupSize{
    size:"small"|'large'="large"
}

type TeaType="masala"|"ginger"|"lemon" //literal type coz we didnt give primitive value

function orderChai(t:TeaType){
    console.log(t)
}

//intersection

type BaseChai={teaLeaves:number}
type Extra={masala:number}

type MasalaChai=BaseChai&Extra //both (this is intersection)

const cup:MasalaChai={
    teaLeaves:2,
    masala:1
}

//optional values
type User={
    username:string,
    bio?:string //optional value
}

const u1:User={username:"love sharma"}
const u2:User={username:"love sharma",bio:"dev.ai"}

//readonly
type Config={
    readonly appName:string
    version:number
}

const cfg:Config={
    appName:"maasterji",
    version:1
}

console.log(cfg.appName)

// cfg.appName="chaiaurCode" // will give error coz we cant change value of readonly if its assigned once
