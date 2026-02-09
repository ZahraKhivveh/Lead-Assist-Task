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