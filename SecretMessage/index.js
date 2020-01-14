const {hash}=window.location;
const message=atob(hash.replace('#',''));

if(message){
    document.querySelector('#message-form').classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");

    document.querySelector('h1').innerHTML=message;
}

document.querySelector("form").addEventListener('submit',event=>{
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    const input=document.querySelector("#message-input");
    const encrypted=btoa(input.value);

    const link=document.querySelector("#link-input");
    
    link.value=`${window.location}#${encrypted}`;
    link.select();// for the link to be selected automatically
});

//btoa("string")= is the method to convert the string to base 64
//${window.location} gives the url and string preceeded by # is the value associated to
//browser that's why we put encrypted there to work with that

