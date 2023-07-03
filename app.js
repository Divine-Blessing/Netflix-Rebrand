// const btn = document.getElementsByClassName("slide-arrow-right");
const btn = document.getElementsByClassName("arrows")
const slider = document.getElementById("first-slide");

btn[0].onclick = function(){
    slider.style.transform = "translateX(0px)";
}
btn[1].onclick = function(){
    slider.style.transform = "translateX(-800px)";
}



