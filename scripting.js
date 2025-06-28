var timer=60;
var score=0;
var get=0;

 
function sRun(){
  score+=10;
  document.querySelector("#run").textContent=score;
}
function geHit(){
   get = Math.floor(Math.random()*10);
   document.querySelector("#gat").textContent=get;
               
  
}

function makeBlubble(){
     var clutter=""
for(var i=1;i<=168;i++){
  var rn =  Math.floor(Math.random()*10)

    clutter+=  `<div class="bubble"> ${rn} </div>`
}
var bn1=document.querySelector("#pbom")
    bn1.innerHTML=clutter
}

function interval(){
   var time= setInterval(function(){
     if(timer>0){
           timer--;
        document.querySelector("#tim").textContent=timer;
    }
    else{
        clearInterval(time)
    }
    
     },1000);
}
document.querySelector("#pbom").addEventListener("click",function(e){
  var hited = Number(e.target.textContent);
  if(hited===get){
    sRun();
    makeBlubble();
    geHit();
  }

    
});
makeBlubble();
interval();
geHit();
sRun();
