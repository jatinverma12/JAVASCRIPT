const checkStatus=(response)=>{
    if(!response.ok)
        throw new Error();
        return response.json();
}

const allPlanets=(data)=>{
    for(let planet of data.results)
    console.log(planet.name);
    return Promise.resolve(data.next);//TO DIRECT RETURN A PROMISE WITH VALUE
}

const NextPage=(url)=>{
    return fetch(url);
}



fetch('https://swapi.co/api/planets/')
.then(checkStatus)
.then(allPlanets)
.then(NextPage)
.then(checkStatus)
.then(allPlanets)
    //const filmurl=data.results[0].films[0];
    //return fetch(filmurl);

//}).then((res)=>{

  //  if(!res.ok)
   // throw new Error();
 //   return res.json();
//}).then((data)=>{
  //  console.log(data);
//})