let startLesson = document.getElementById("start-lesson");
let mainTextDiv = document.querySelector(".div-text");
let endLevel1Div = document.getElementById("level1-end-button");
let next_message_button = document.getElementById("next-message");
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
function goToTest1(){
    window.location.href = "./test1.html";
}
