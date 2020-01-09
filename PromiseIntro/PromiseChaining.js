
const fakeRequest=(url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pages={
                '/users':[
                    {id:1,username:"jatin"},
                    {id:5,username:"rohit"}    
                        ],
            '/users/1':{
                id:1,
                username:"jatin",
                upvotes:360,
                city:"muradnagar",
                topPostId:201206
                },
            '/users/5':{
                id:5,
                username:"rohit",
                upvotes:540,
                city:"muradnagar",
                topPoatId:201206
                },

            '/posts/201206':{
                id:201206,
                title:"this is muradnagar"
            }
            }
            const data=pages[url];
            if(data)
            {
                resolve({status:20,data});
            }else{
                reject({status:404});
            }

        },1000)
    });

    
}
fakeRequest('/users').then((res)=>{
    const id=res.data[0].id;
    console.log(id);
    fakeRequest(`/users/${id}`).then((res)=>{
        const postid=res.data.topPostId;
        console.log(postid);
        fakeRequest(`/posts/${postid}`).then((res)=>{
            console.log(res.data.title);
        });
    }).catch((err)=>{
        console.log(err);


    })
});

///INSTEAD OF USING NESTED USE THIS
fakeRequest('/users')
 	.then((res) => {
 		console.log(res);
 		const id = res.data[0].id;
 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
 	})
 	.then((res) => {
 		console.log(res);
 		const postId = res.data.topPostId;
 		return fakeRequest(`/posts/${postId}`);
 	})
 	.then((res) => {
 		console.log(res);
     })
     
     //IF ANY OF THE ABOVE PROMISES IS REJECTED THIS IS GONNA RUN
 	.catch((err) => {
 		console.log('OH NO!', err);
 	});
