let iconV2 = document.querySelector(".iconV2");
let leftSide = document.querySelector(".leftSide");
let openSide = document.querySelector(".openSide");
let threeBtn = document.querySelector(".threeBtn");

function closeBar(){
  leftSide.classList.add(hidden);
}
function openBar(){
  leftSide.classList.remove(hidden);
}
iconV2.addEventListener("click" , closeBar);
threeBtn.addEventListener("click" , openBar);
