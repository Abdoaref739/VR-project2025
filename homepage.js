let header = document.querySelector(".header");
let arrowDown = document.getElementById("arrowDown");
let startButton = document.getElementById("getStarted");
let games_section = document.querySelector(".games-section");
let main_text = document.querySelector(".mainText");
let blur1 = document.getElementById("blur1");
let leveloneButton = document.getElementById("level1");
let leveltwoButton = document.getElementById("level2");
let levelthreeButton = document.getElementById("level3");
let text1 = document.getElementById("text1");
let imageCard = document.querySelector("image-card");
let cardContainer = document.getElementById("container");
let signup = document.getElementById("signup");
let test1Div = document.getElementById("test1");
let test2Div = document.getElementById("test2");
let game1Div = document.getElementById("game1");
let gamesSection = document.querySelector(".games-section");
let gamesSectionButton = document.querySelector(".gamesSection");
let gamesText = document.querySelector(".games-text");
let level1Blur = document.getElementById("level1-blur");
let level2Blur = document.getElementById("level2-blur");
let game1Blur = document.getElementById("game1-blur");
let game1Button = document.getElementById("navigate-start1-button");
let test1Button = document.getElementById("navigate-quiz1-button");
let test2Button = document.getElementById("navigate-quiz2-button");
let moonIconDiv = document.getElementById("moon-div");
let moonIcon = document.getElementById("moonIcon");
let sunIconDiv = document.getElementById("sun-div");
let sunIcon = document.getElementById("sunIcon");
let levelSection = document.querySelector(".levelsSection");
let aboutSection = document.querySelector(".aboutSection");
let testSection = document.querySelector(".testSection");
let levelsDiv = document.querySelector(".levels");
let levelsLabel = document.querySelector(".levelsLabel");
let writer1 = document.querySelector(".writer");
let writer2 = document.querySelector(".writer2");
let writer3 = document.querySelector(".writer3");
let writer4 = document.querySelector(".writer4");
let teamDiv = document.getElementById("team-cards-div");
let teamText = document.querySelector(".our-team-text");
let testDiv = document.querySelector(".tests-section");
let testText = document.querySelector(".tests-text");
let bars = document.getElementById("bars");
let sidebar = document.getElementById("sidebar");
let devCard = document.querySelector(".dev-card");
let closeIcon = document.getElementById("close-icon");
let levelSection_sideBar = document.querySelector(".levelsSection-sidebar");
let aboutSection_sideBar = document.querySelector(".aboutSection-sidebar");
let testSection_sideBar = document.querySelector(".testSection-sidebar");
let lang_sideBar = document.querySelector("lang-sidebar");
let modes = document.querySelector(".modes");
let sunIcon_sideBar = document.getElementById("sunIcon-sidebar");
let moonIcon_sideBar = document.getElementById("moonIcon-sidebar");
let devContainer = document.getElementById("container");
let marq = document.querySelector(".marq");
let text_marq = document.querySelector(".text1");
let login_button = document.getElementById("login");
let header_name_text = document.querySelector(".header-text-name");
game1Button.onclick = function(){
    window.location.href = "./memorygame.html";
}
window.onscroll = function(){
    if(window.scrollY == 0){
        header.style.width = "520px";
    header.style.borderRadius = "25px";
    header.style.height = "47px";
    main_text.style.display = "block";
    login_button.style.display = "block";
    header.style.margin = "25px 0px 0px 440px";
    header_name_text.style.display = "none";
    levelSection.style.marginLeft = "395px";
    aboutSection.style.marginLeft = "290px";
    testSection.style.marginLeft = "195px";
    levelSection.style.marginTop = "5px";
    aboutSection.style.marginTop = "5px";
    testSection.style.marginTop = "5px";
    moonIcon.style.fontSize = "27px";
    moonIcon.style.margin = "10px 0px 0px 50px";
    sunIcon.style.fontSize = "27px";
    sunIcon.style.margin = "10px 0px 0px 50px";
    gamesSectionButton.style.margin = "5px 0px 0px 85px";
    }
    else if(window.scrollY != 0){
        header.style.width = "100%";
        header.style.borderRadius = "0px";
        header.style.height = "65px";
        header.style.margin = "-7px 0px 0px -10px";
        main_text.style.display = "none";
        header_name_text.style.display = "block";
        levelSection.style.marginLeft = "800px";
        levelSection.style.marginTop = "14px";
        aboutSection.style.marginLeft = "650px";
        aboutSection.style.marginTop = "14px";
        testSection.style.marginLeft = "495px";
        testSection.style.marginTop = "14px";
        moonIcon.style.fontSize = "35px";
        moonIcon.style.margin = "14px 0px 0px 230px";
        gamesSectionButton.style.margin = "14px 0px 0px 350px";
        sunIcon.style.fontSize = "35px";
    sunIcon.style.margin = "14px 0px 0px 230px";
    }
}
    levelSection_sideBar.onclick = function(){
        window.scrollBy(0, 800);
    }
    aboutSection_sideBar.onclick = function(){
        window.scrollBy(0, 1600);
    }
    testSection_sideBar.onclick = function(){
        window.scrollBy(0, 2500);
    }
bars.onclick = function(){
    if(sidebar.style.display == "none"){
        sidebar.style.display = "block";
        levelSection_sideBar.style.display = "block";
        aboutSection_sideBar.style.display = "block";
        testSection_sideBar.style.display = "block";
        lang_sideBar.style.display = "block";
        moonIcon_sideBar.style.display = "block";
        sunIcon_sideBar.style.display = "block";
    }
}
devCard.onmouseover = function(){
    devContainer.style.display = "block";
}
devCard.onmouseout = function(){
    devContainer.style.display = "none";
}
        test1Button.onclick = function(){
            window.location.href = "./test1.html";
        }
        leveloneButton.onclick = function(){
            window.location.href = "./level1.html";
        }
        function gotoSignup(){
    window.location.href = "./signup.html";
}
signup.addEventListener("click", gotoSignup);
function scrollDown(){
        window.scrollBy(0, 800);

}
startButton.addEventListener("click", scrollDown);
startButton.onmouseover = function(){
    arrowDown.style.display = "block";
    startButton.style.width = "100px";
    startButton.style.height = "40px";
}
function mouseoutFunction(){
    blur1.style.display = "none";
}
function mouseoverFunction(){
    blur1.style.display = "block";
}
function mouseoutFunction2(){
    blur2.style.display = "none";
}
function mouseoverFunction2(){
    blur2.style.display = "block";
}
function mouseoutFunction3(){
    blur3.style.display = "none";
}
function mouseoverFunction3(){
    blur3.style.display = "block";
}
startButton.onmouseout = function(){
    arrowDown.style.display = "none";
    startButton.style.width = "85px";
    startButton.style.height = "35px";
}
test1Div.addEventListener("mouseover", function(){
    level1Blur.style.display = "block";
});
test1Div.addEventListener("mouseout", function(){
    level1Blur.style.display = "none";
});
test2Div.addEventListener("mouseover", function(){
    level2Blur.style.display = "block";
});
test2Div.addEventListener("mouseout", function(){
    level2Blur.style.display = "none";
});
game1Div.addEventListener("mouseout", function(){
    game1Blur.style.display = "none";
});
game1Div.addEventListener("mouseover", function(){
    game1Blur.style.display = "block";
});
levelSection.onclick = function(){
    window.scrollTo(0, 800);
}
aboutSection.onclick = function(){
    window.scrollTo(0, 1600);
}
testSection.onclick = function(){
    window.scrollTo(0, 2500);
}
let wave = document.querySelector(".wave");
let wave2 = document.querySelector(".wave2");
moonIconDiv.addEventListener("click", darkMode);
function darkMode(){
    writer1.style.backgroundColor = "#121212";
    wave.style.color = "#121212";
    levelsLabel.style.color = "white";
    teamDiv.style.backgroundColor = "#121212";
    writer2.style.backgroundColor = "#121212";
    levelsDiv.style.backgroundColor = "#121212";
    moonIcon.style.color = "white";
    sunIcon.style.color = "white";
    aboutSection.classList.add("aboutSection-dark");
    testSection.classList.add("testSection-dark");
    levelSection.classList.add("levelsSection-dark");
        wave.style.display = "none";
        wave2.style.display = "block";
moonIconDiv.style.display = "none";
sunIcon.style.display = "block";
teamText.style.color = "white";
testDiv.style.backgroundColor = "#121212";
writer3.style.backgroundColor = "#121212";
testText.style.color = "white";
marq.style.border = "1px solid white";
text_marq.style.color = "white";
header.style.backgroundColor = "#121212";
header_name_text.style.color = "white";
gamesSection.style.backgroundColor = "#121212";
gamesText.style.color = "white";
gamesSectionButton.classList.add("gamesSection-dark");
gamesSectionButton.classList.remove("gamesSection");
}
sunIconDiv.addEventListener("click", lightMode);
function lightMode(){
    writer1.style.backgroundColor = "white";
    levelsLabel.style.color = "black";
    levelsDiv.style.backgroundColor = "white";
    moonIcon.style.color = "black";
    sunIcon.style.color = "black";
    testSection.classList.remove("testSection-dark");
    testSection.classList.add("testSection");
    levelSection.classList.remove("levelsSection-dark");
    levelSection.classList.add("levelsSection");
    aboutSection.classList.remove("aboutSection-dark");
    aboutSection.classList.add("aboutSection");
    gamesSectionButton.classList.remove("gamesSection-dark");
    gamesSectionButton.classList.add("gamesSection");
    header.style.backgroundColor = "white";
        wave.style.display = "block";
        wave2.style.display = "none";
moonIconDiv.style.display = "block";
sunIcon.style.display = "none";
teamText.style.color = "black";
teamDiv.style.backgroundColor = "white";
writer2.style.backgroundColor = "white";
testDiv.style.backgroundColor = "white";
writer3.style.backgroundColor = "white";
testText.style.color = "black";
marq.style.border = "1px solid black";
text_marq.style.color = "black";
header_name_text.style.color = "black";
gamesSection.style.backgroundColor = "white";
gamesText.style.color = "black";
}
modes.onclick = function(){
    if (sunIcon_sideBar.style.display = "block" && moonIcon_sideBar.style.display == "none") {
        darkMode();
    }
    if(moonIcon_sideBar.style.display = "block" && sunIcon_sideBar.style.display == "none"){
        lightMode();
    }
}
sunIcon_sideBar.onclick = function(){
sunIcon_sideBar.style.display = "none";
moonIcon_sideBar.style.display = "block";
}
moonIcon_sideBar.onclick = function(){
    moonIcon_sideBar.style.display = "none";
    sunIcon_sideBar.style.display = "block";
}
closeIcon.onclick = function(){
    sidebar.style.display = "none";
}
test1Div.addEventListener("mouseout", mouseoutFunction);
leveloneButton.addEventListener("mouseover", mouseoverFunction);
leveloneButton.addEventListener("mouseout", mouseoutFunction);
leveltwoButton.addEventListener("mouseover", mouseoverFunction2);
leveltwoButton.addEventListener("mouseout", mouseoutFunction2);
levelthreeButton.addEventListener("mouseover", mouseoverFunction3);
levelthreeButton.addEventListener("mouseout", mouseoutFunction3);
bars.onclick = function(){
    sidebar.style.display = "block";
}
leveltwoButton.onclick = function(){
    window.location.href = "./level2.html";
    }
    levelthreeButton.onclick = function(){
    window.alert("قريبا.......")
        }
        login_button.onclick = function(){
            window.location.href = "./login.html";
        }
        test2Button.onclick = function(){
            window.location.href = "./test2.html";
        }
        games_section.onclick = function(){
            window.location.href = "./game.html";
        }