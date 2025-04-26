let startLesson = document.getElementById("start-lesson");
let mainTextDiv = document.querySelector(".div-text");
let endLevel1Button = document.getElementById("level2-end-button");
let back_button = document.getElementById("back-button");
back_button.onclick = function(){
    window.location.href = "./index.html";
}
startLesson.onmouseover = function(){
    arrowDown.style.display = "block";
}
startLesson.onmouseout = function(){
    arrowDown.style.display = "none";
}
startLesson.addEventListener("click", function(){
    window.scrollBy(0, 800);
});
window.onload = function(){
    window.scrollTo(0, 0);
}
function goToTest2(){
    window.location.href = "./test2.html";
}