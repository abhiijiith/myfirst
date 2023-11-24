
let score=0;
let timex=0;


const dino= document.getElementById("sprite");
const ob1= document.getElementById("object2");


document. addEventListener('keypress',jump);    

setInterval(function(){
    document.getElementById("scorelabel").innerHTML=(score=score+1);
},100);

setTimeout(function(){
    document.getElementById("object2").classList.add("inft2")
},1200);

setInterval(function(){
    timex= Math.floor(Math.random()*6);
    console.log(timex);
},2000);


setInterval(function(){
    if(!(document.getElementById("obj3").classList.contains("inft3"))){
        setInterval(function(){
            if(!(document.getElementById("obj3").classList.contains("inft3"))){
                setInterval(function(){
                    if(!(document.getElementById("obj3").classList.contains("inft3"))){
                        document.getElementById("obj3").classList.add("inft3")
                        setTimeout(function(){
                            document.getElementById("obj3").classList.remove("inft3")
                        },3000);
                    }
                    
                },timex*1000);
                console.log("working",(timex*1000)+2000)
        
            }
        },0)
    }
},1000);



setTimeout(function(){
    document.getElementById("vfxid").classList.add("vfx");
},10000);



function jump(){
    if(!(document.getElementById("sprite").classList.contains("jump"))){
        document.getElementById("sprite").classList.add("jump");
        setTimeout(function(){
            document.getElementById("sprite").classList.remove("jump");
        }, 800) 
    }
}


setInterval(()=>{
    let spritetop=parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let objleft=parseInt(window.getComputedStyle(ob1).getPropertyValue('left'));
    console.log(objleft,spritetop);
},10);