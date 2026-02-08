const closeIcon = document.querySelector(".closeIcon");
const leftSide = document.querySelector(".leftSide");
const righSide = document.querySelector(".righSide");
const openSide= document.querySelector(".openSide");

    function closeL (){
    leftSide.style.display ="none";
    openSide.style.display ="block";
    closeIcon.style.display ="none";
    }
   
    function openL (){
    leftSide.style.display ="block";
    openSide.style.display ="none";
    closeIcon.style.display ="block";
    }
  
closeIcon.addEventListener("click" , closeL);
openSide.addEventListener("click" , openL);