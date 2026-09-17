function getChai(kind:string|Number){
    if(typeof kind==="string"){
        return `Making ${kind} chai....`
    }

    return `Chai order ${kind}`
}

//truthiness
function serveChai(msg?:string){ //question mark makes it optional agr na bhi aaya toh error nhi dega
    if(msg){ //type narrowing
        return `serving ${msg}`
    }

    return 'serving default masala chai'
}

//exhaustive checking

function orderChai(size:"small"|"medium"|'large'|number){
    if (size==="small"){
        return `small cutting chai...`
    }
    if(size==='medium'||size==='large'){
        return "make extra chai"
    }

    return `chai order number:${size}`
}


//Guard checking and typeGuard
class KulhadChai{
    serve(){
        return `Kulhad chai`
    }
}
class Cutting{
    serve(){
        return `Seving Cutting chai`
    }
}

function serve(chai:KulhadChai|Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve()// we are sure that the mehod of kulhad chai will run
    }
}

//custom types
type ChaiOrder={
    type:string
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj==="object"&&
        obj!==null &&
        typeof obj.type==="string" &&
        typeof obj.type==="number"
    )
}

function serveOrder(item:ChaiOrder|string){
    if (isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `serving custom chai: ${item}` 
}