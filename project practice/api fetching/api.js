let a=document.getElementById('timebox');
let b=document.getElementById("hourbox");
let c=document.getElementById("minbox");
let d=document.getElementById("secbox");
let x=document.getElementById("divtwo");
let y=document.getElementById("divone");
let z=document.getElementById("amcheck");

let now=new Date();
let k=now.getHours();




function time(){
    let now=new Date();
    console.log("date is:",now.getDate());
    console.log("day is:",now.getDay());

    var e=now.getHours();
    let f=now.getMinutes();
    let g=now.getSeconds();
    console.log(12-e);

    if(e>12){
        e=e-12;

      b.innerText=e;
      

    }else{

        b.innerText=e;
    }

   
    c.innerText=f;
    d.innerText=g;
    y.innerText=":";
    x.innerText=":";



    setTimeout(time,1000);


};
time();


function flicker(){

    
}
setTimeout(flicker,1000);

if(k>12){
    z.innerText="tension mat le its :-"+"PM";

}else{
    z.innerText='Tension mat liyo its :-' +"AM";
}

