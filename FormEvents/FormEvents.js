
const creditcard=document.querySelector('#cc');
const termscheckbox=document.querySelector("#terms");
const veggieselect=document.querySelector("#veggies");
const form=document.querySelector("#signup");
form.addEventListener('submit',function(e){
    alert('submitted');
    console.log("credit card",creditcard.value);
    console.log('checkbox',termscheckbox.checked);
    e.preventDefault();//It stops form to submit data to provided url
});
const formData={};
for(let input of [creditcard,veggieselect,termscheckbox])
{
    input.addEventListener('change',({target})=>{
        const{name,type,value,checked}=target;
        formData[name]=type==='checkbox'?checked:value;
        console.log(formData);
    })
}
//creditcard.addEventListener('input',(e)=>{
//    console.log('CC CHANGED',e);
 //   formData['cc']=e.target.value;
    
//});

//veggieselect.addEventListener('input',(e)=>{
//    formData['veggies']=e.target.value;
//})