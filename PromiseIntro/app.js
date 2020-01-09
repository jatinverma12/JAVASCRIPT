//const willGetYouDog=new Promise((resolve,reject)=>{
//    const rand=Math.random();
//    if(rand<0.5)
//    resolve();
//    else
//    reject();
//});

//this will run when promise if resolved
//willGetYouDog.then(()=>{
 //   console.log("badhaiyan ho");
//});

//this code will run if promise is rejected
//willGetYouDog.catch(()=>{
//    console.log("better luck next time");
//})



//function returning a promise
const makedogPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const rand=Math.random();
            if(rand<0.5)
            resolve();
            else
            reject();
            
        }, 5000);
        
    });

}

makedogPromise()
//this will run when promise if resolved
.then(()=>{
    console.log("badhaiyan ho");
})//there should not be any semicolon

//this code will run if promise is rejected
.catch(()=>{
    console.log("better luck next time");
});
