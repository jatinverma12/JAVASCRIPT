//RESOLOVING AND REJECTING WITH VALUES
const MakeRequest=(url)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           
                const pages={
                    '/user':{
                        id:1,
                        name:"jatin"
                    },
                    '/about':"this is about the given url"
                };
                const data=pages[url];
                if(data){
                    resolve({status:20,data});
                }else{
                    reject({status:404});
                }
                
            
            

        },1000);

        
    });
}

MakeRequest('/abou').then((res)=>{
    console.log("request worked",res.status);
    console.log(res.data);
}).catch((response)=>{
    console.log(response.status);
    console.log("request rejected");
})

