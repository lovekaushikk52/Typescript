class Chai{
    flavour:string;
    price:number

    constructor(flavour:string,price:number){
        this.flavour=flavour;
        this.price=price
    }
}

const masalaChai=new Chai("ginger",20)
masalaChai.flavour="khatta meetha"

//access modifiers
class Chai2 {
    public flavor:string="masala chai"
    private secretIngredients:string="cardamom"

    reveal(){
        return this.secretIngredients //ok
    }
}

const c=new Chai2()
console.log(c.reveal())


//inheritance
class Shop{
    protected shopname="chai corner"
}

class branch extends Shop{
    getName(){
        return this.shopname
    }
}

//readonly
class Cup{
    readonly capacity:number=250

    constructor(capacity:number){
        this.capacity=capacity 
    }
}

//getter and setters

class modernChai{
    private _sugar=2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value>5) throw new Error("meetha h kya bsdk")
        this._sugar=value
    }
}

const m=new modernChai()
m.sugar=3

//static
class EkChai{
    static shopName="chai aur code"

    constructor(public flavour:string){}
}
console.log(EkChai.shopName) //ststic members are accessed directly by class

//abstract class

abstract class Drink{
    abstract make():void
}

class Mychai extends Drink{
    make(){
        console.log("brewing chai....")
    }
}


//this points the new object which is most recently made
//private varibale can be made by adding # in start and also by _ in start


//class composition

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor (private heater:Heater){}

    make(){
        this.heater.heat
    }
}
