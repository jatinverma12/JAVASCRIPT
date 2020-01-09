

//ASYNC KEYWORD MAKE FUNCTIONS RETURN PROMISE
async function sayHello(){
    return "HELLO";
}
sayHello().then((val)=>{
    console.log(val);
})

async function add(x,y){
    if(typeof x!=='number' || typeof y !=='number')
        throw "Addends must be numbers";
    
    return x+y;
}
add('e','r')
.then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log("Illegal characters passed");
})

//function add(x,y){
//    return new Promise((resolve,reject)=>{
 //       if(typeof x!=='number' || typeof y!=='number')
//        reject("Addendes must be numbers");
//        else{
 //           resolve(x+y);
 //       }
 //   });

//}
//add(4,'f').then((val)=>{
//    console.log("addition is",val);
//}).catch((val)=>{
//    console.log(val);
//})