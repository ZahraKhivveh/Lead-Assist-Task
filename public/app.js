let arrowButton = document.querySelector(".arrow-right");
let textHover = document.querySelector(".textHover");
let isRight = false;
function turnButton(){
    if(isRight){
        arrowButton.setAttribute("src" , "./imgs/p0.png");
        textHover.style.color= #155EEF;
        isRight = false; 
      }else{
        arrowButton.setAttribute("src" , "./imgs/p2.png");
        isRight =true;
      }
    
}
arrowButton.addEventListener("click" , turnButton);