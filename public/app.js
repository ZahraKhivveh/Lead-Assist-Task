const closeIconR = document.querySelector(".closeIconR");
const closeIcon = document.querySelector(".closeIcon");
const leftSide = document.querySelector(".leftSide");
const rightSide = document.querySelector(".rightSide");
const openSide= document.querySelector(".openSide");
const openSideR= document.querySelector(".openSideR");
const centerSide = document.querySelector(".centerSide");
 

function closeR (){
    rightSide.style.display ="none";
    openSideR.style.display ="block";
    closeIconR.style.display ="none";
    centerSide.style.display ="block"
    } 
    function closeL (){
    leftSide.style.display ="none";
    openSide.style.display ="block";
    closeIcon.style.display ="none";
    centerSide.style.display ="block"
    }
   
    function openR (){
        rightSide.style.display ="block";
        openSideR.style.display ="none";
        closeIconR.style.display ="block";
        centerSide.style.display ="none";
        }
    function openL (){
    leftSide.style.display ="block";
    openSide.style.display ="none";
    closeIcon.style.display ="block";
    centerSide.style.display ="none";
    ;
    }
  
closeIconR.addEventListener("click" , closeR);
closeIcon.addEventListener("click" , closeL);
openSide.addEventListener("click" , openL);
openSideR.addEventListener("click" , openR);

let playIcon = document.querySelector(".playIcon");
let music = document.querySelector(".audio");
let pauseIcon = document.querySelector(".pauseIcon");

function playIconHandler (){
    music.play();
    pauseIcon.classList.remove("hidden");
    playIcon.classList.add("hidden");
}
function pauseIconHandler (){
music.pause();
playIcon.classList.remove("hidden");
pauseIcon.classList.add("hidden");
}
pauseIcon.addEventListener("click" , pauseIconHandler);
playIcon.addEventListener("click" ,playIconHandler);