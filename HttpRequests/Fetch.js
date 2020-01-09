//IT SUPPORTS PROMISES WHICH MAKES IT MORE EASIER TO USE THAN XHRs
//NOT SUPPORTED IN INTERNET EXPLORER

fetch('https://swapi.co/api/planetsD/')
.then((res)=>{

//IN FETCH ALTHOUGH YOU TYPE A FALSE URL IT WILL STILL RESOLVE THE PROMISE AND  RUN THEN AND RETURN THE 404 PAGE
//CATCH ONLY WORKS IN FETCH WHEN THERE IS A SERVER OR NETWORK ISSUE 
//SO I USED OK PROPERTY
//STATUS CODE IS OK ONLY WHEN URL IS RIGHT



    if(!res.ok)
    {
        console.log("nOT Status 200");
        throw new Error();
        //IT TAKES US TO CATCH BLOCK
    }
    else{
        res.json().then((data)=>{ //.json returns a promise so i used then()
            console.log(data);
            console.log(data.next);
            for(let planet of data.results)
            console.log(planet.name);
            
        });

    }

    
}).catch((err)=>{
    console.log("something went wrong with fetch")
})