const firstReq=new XMLHttpRequest();
firstReq.addEventListener('load',function(){
    console.log(this.responseText);
    const data=JSON.parse(this.responseText);
    //JSON is converted to javascript object
    console.log(data.count);
    
});

firstReq.addEventListener('err',()=>{
    console.log("error");
});

firstReq.open('GET','https://swapi.co/api/planets/');
firstReq.send();
console.log("request sent");