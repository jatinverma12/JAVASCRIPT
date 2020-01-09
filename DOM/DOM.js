 // the thing      event type       the code to run
 //button           click           change the color
 //input            hits return     get search results
 //image            mouseover        display the img caption

 const btn=document.querySelector('button');
 btn.addEventListener('click',function(){
     alert("clicked!!")
 });

 btn.addEventListener("click",function(){
     console.log("second thing");
 });
 btn.addEventListener("mouseover",function(){
     btn.innerText='Stop touching me';
 });
 btn.addEventListener("mouseout",function(){
     btn.innerText="clicked!!";
 });

 ///////////creating blocks//////////
 const colors=['red','blue','green','yellow'];
 const bx=document.querySelector('#boxes');

 const changecolor=function(){
    const h1=document.querySelector('h1');
    h1.style.color=this.style.backgroundColor;
 }
 for(let c of colors){
     const b=document.createElement('div');
     b.style.backgroundColor=c;
     b.classList.add('box');
     bx.appendChild(b);
     b.addEventListener('click',changecolor);
 };


