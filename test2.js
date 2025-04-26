let container = document.getElementById("container");
let questionField = document.querySelector(".text-question");
let spanItems = document.getElementById("span-items");
let answer1_btn = document.querySelector(".answer1-button");
let answer2_btn = document.querySelector(".answer2-button");
let answer3_btn = document.querySelector(".answer3-button");
let answer4_btn = document.querySelector(".answer4-button");
let questionIndexDiv = document.getElementById("questions-index");
let startQuizDiv = document.getElementById("alert-div");
let agreeButton = document.getElementById("agree-button");
let refuseButton = document.getElementById("refuse-button");
let blur = document.getElementById("blur");
let alertText = document.querySelector("main-alert-text");
let user_greeting = document.getElementById("username-span");
let score_data = document.getElementById("score-data");
let results_div = document.getElementById("score-data-div");
let div_content = document.querySelector(".header-text-div");
let go_to_homepage = document.getElementById("go-to-homepage");
let assistant  = document.getElementById("assistant-image");
let assistant_message = document.getElementById("assistant-message");
let assistant_message_div = document.getElementById("message-div");
let interval;
let score = 0;
go_to_homepage.onclick = function(){
    window.location.href = "./index.html";
}
let questionObject1 = {
    question: "في أي شركه تم تصميم Oculus Rift?",
    right_answer: "oculus Vr",
    wrong_answer1: "microsoft",
    wrong_answer2: "neuraLink",
    wrong_answer3: "لا شيء مما سبق"
}
let questionObject2 = {
    question: "تم تطوير نظاره htc Vive بالتعاون مع",
    wrong_answer3: "valve corporation",
    wrong_answer1: "HTC",
    wrong_answer2: "playstation",
    right_answer: " جميع ما سبق"
}
let questionObject3 = {
    question: "أي مما يأتي يمزج بين الواقع الأفتراضي و الحقيقي؟",
    right_answer: "playstation vr",
    wrong_answer1: "oculus quest",
    wrong_answer2: "Samsung Gear VR",
    wrong_answer3: "microsoft hololens"
}
let questionObject4 = {
    question: "تعد أجهزه ....... تطورا رائدا في عالم التكنولوجيا",
    right_answer: " أجهزة الواقع الافتراضي والمدمجة",
    wrong_answer1: "الهواتف السلكيه",
    wrong_answer2: "الكاميرات الفيلميه",
    wrong_answer3: "الكاسيت"
}
let questionObject5 = {
    question: "تعتمد على نظام محمول بدون الحاجة إلى جهاز كمبيوتر خارجي",
    right_answer: "oculus quest",
    wrong_answer1: "playstation vr",
    wrong_answer2: "microsoft hololens",
    wrong_answer3: "لا شيئ مما سبق"
}
go_to_homepage.onclick =  function(){
    window.location.href = "./homepage.html";
}
    let questionArr = [questionObject1, questionObject2, questionObject3, questionObject4, questionObject5];
    let i;
    for(i = 0; i < questionArr.length; i++){
        let spans = document.createElement("div");
        spans.classList.add("span");
        spanItems.appendChild(spans);
            }
            let indexBox = document.getElementById("questions-index");
            let questionIndex = 1;
            let minutesCounter = document.getElementById("minutes-counter");
                let secondCounter = document.getElementById("seconds-counter");
                let tryAgainButton = document.getElementById("try-again");
                let ii = 30;
                let minutes = 2;
                let resulted_score;
function timer(){
                    minutesCounter.innerHTML = minutes;
                    if(ii != 0){
                        ii--;
                        secondCounter.innerHTML = ii;
                    }
                    if(ii === 0 && minutes != 0){
                        ii = 60;
                        minutes--;
                    }
                    if (minutes == 0 && ii == 0) {
                        startQuizDiv.style.display = "block";
                        agreeButton.style.display = "none";
                        tryAgainButton.style.display = "block";
                        answer1_btn.disabled = true;
                        answer2_btn.disabled = true;
                        answer3_btn.disabled = true;
                        answer4_btn.disabled = true;
                        clearInterval(interval);
                    }
                    if(questionIndex == 6 && score >= 2){
                        console.log("done")
                        clearInterval(interval);
                        results_div.style.display = "block";
                        user_greeting = localStorage.getItem("username");
                        div_content.innerHTML = `مبروك ${user_greeting}, لقد أجتزت الأختبار الأول`;
                        score_data.innerHTML = score;
                        resulted_score = window.localStorage("score", score);
                    }else if(questionIndex == 6 && score <= 2){
                        console.log("done")
                    clearInterval(interval);
                    results_div.style.display = "block";
                    user_greeting = localStorage.getItem("username");
                    score_data.innerHTML = score;
                        div_content.innerHTML = `للأسف, ${user_greeting}, لقد رسبت الأختبار الأول`;
                        resulted_score = window.localStorage("score", score);
                    }
                }
agreeButton.onclick = function(){
    minutes = 2;
    ii = 60;
    interval = setInterval(timer, 1000);
        startQuizDiv.style.display = "none";
        blur.style.display = "none";
        timer();
    }
    function restartFunction(){
        window.location.href = "./test1.html";
    }
tryAgainButton.onclick = function(){
    restartFunction();
    timer();
    interval = setInterval(timer, 1000);
        startQuizDiv.style.display = "none";
        answer1_btn.disabled = false;
                        answer2_btn.disabled = false;
                        answer3_btn.disabled = false;
                        answer4_btn.disabled = false;
                        startQuiz();
}
go_to_homepage.onclick = function(){
    window.location.href = "./index.html";
}
while(tryAgainButton.onclick === true){
    timer();
}
while(refuseButton.onclick === true){
    startQuizDiv.style.display = "none";
    answer1_btn.disabled = false;
                        answer2_btn.disabled = false;
                        answer3_btn.disabled = false;
                        answer4_btn.disabled = false;
}
refuseButton.onclick = function(){
    startQuizDiv.style.display = "none";
    blur.style.display = "none";
    answer1_btn.disabled = false;
                        answer2_btn.disabled = false;
                        answer3_btn.disabled = false;
                        answer4_btn.disabled = false;
                        window.location.href = "./homepage.html";
                        
}
        function startQuiz(){
        if(questionIndex == 1){
            questionIndexDiv.innerHTML = questionIndex;
        questionField.innerHTML = questionObject1.question;
        answer1_btn.innerHTML = questionObject1.right_answer;
        answer2_btn.innerHTML = questionObject1.wrong_answer1;
        answer3_btn.innerHTML = questionObject1.wrong_answer2;
        answer4_btn.innerHTML = questionObject1.wrong_answer3;
        }else if(questionIndex == 2){
            answer1_btn.disabled = false;
            questionIndexDiv.innerHTML = questionIndex;
        questionField.innerHTML = questionObject2.question;
        answer1_btn.innerHTML = questionObject2.right_answer;
        answer2_btn.innerHTML = questionObject2.wrong_answer1;
        answer3_btn.innerHTML = questionObject2.wrong_answer2;
        answer4_btn.innerHTML = questionObject2.wrong_answer3;
        answer1_btn.classList.remove("right-answer");
        answer1_btn.classList.add("answer1-button");
        answer2_btn.classList.remove("wrong-answer2");
            answer2_btn.classList.add("answer2-button");
            answer3_btn.classList.remove("wrong-answer3");
            answer3_btn.classList.add("answer3-button");
            answer4_btn.classList.remove("wrong-answer4");
            answer4_btn.classList.add("answer4-button");
            answer1_btn.disabled = false;
            answer2_btn.disabled = false;
        answer3_btn.disabled = false;
        answer4_btn.disabled = false;
        }else if(questionIndex == 3){
            questionIndexDiv.innerHTML = questionIndex;
        questionField.innerHTML = questionObject3.question;
        answer1_btn.innerHTML = questionObject3.right_answer;
        answer2_btn.innerHTML = questionObject3.wrong_answer1;
        answer3_btn.innerHTML = questionObject3.wrong_answer2;
        answer4_btn.innerHTML = questionObject3.wrong_answer3;
        answer1_btn.classList.remove("wrong-answer1");
        answer1_btn.classList.add("answer1-button");
        answer4_btn.classList.remove("right-answer4");
        answer4_btn.classList.add("answer4-button");
        answer2_btn.classList.add("answer2-button");
        answer2_btn.classList.remove("wrong-answer2");
        answer3_btn.classList.remove("wrong-answer3");
        answer3_btn.classList.add("answer3-button");
        answer1_btn.disabled = false;
        answer2_btn.disabled = false;
        answer3_btn.disabled = false;
        answer4_btn.disabled = false;
        }else if(questionIndex == 4){
            questionIndexDiv.innerHTML = questionIndex;
        questionField.innerHTML = questionObject4.question;
        answer2_btn.innerHTML = questionObject4.right_answer;
        answer1_btn.innerHTML = questionObject4.wrong_answer1;
        answer3_btn.innerHTML = questionObject4.wrong_answer2;
        answer4_btn.innerHTML = questionObject4.wrong_answer3;
        answer1_btn.classList.remove("wrong-answer1");
        answer1_btn.classList.add("answer1-button");
        answer4_btn.classList.remove("right-answer4");
        answer4_btn.classList.add("answer4-button");
        answer2_btn.classList.add("answer2-button");
        answer2_btn.classList.remove("wrong-answer2");
        answer3_btn.classList.add("answer3-button");
        answer3_btn.classList.remove("wrong-answer3");
        answer1_btn.disabled = false;
        answer2_btn.disabled = false;
        answer3_btn.disabled = false;
        answer4_btn.disabled = false;
        }else if(questionIndex == 5){
            questionIndexDiv.innerHTML = questionIndex;
            questionField.innerHTML = questionObject5.question;
            answer3_btn.innerHTML = questionObject5.right_answer;
            answer1_btn.innerHTML = questionObject5.wrong_answer1;
            answer2_btn.innerHTML = questionObject5.wrong_answer2;
            answer4_btn.innerHTML = questionObject5.wrong_answer3;
            answer1_btn.classList.remove("wrong-answer1");
        answer1_btn.classList.add("answer1-button");
        answer2_btn.classList.remove("right-answer2");
        answer2_btn.classList.add("answer2-button");
        answer3_btn.classList.remove("wrong-answer3");
        answer3_btn.classList.add("answer3-button");
        answer4_btn.classList.remove("right-answer4");
        answer4_btn.classList.add("answer4-button");
        answer1_btn.disabled = false;
        answer2_btn.disabled = false;
        answer3_btn.disabled = false;
        answer4_btn.disabled = false;
        }
        if(results_div.style.display == "block" && questionIndex == 6){
            clearInterval(interval);
        }
    }
window.onload = function(){
    startQuiz();
        blur.style.display = "block";
    startQuizDiv.style.display = "block";
    assistant.style.display = "block";
        assistant_message_div.style.display = "block";
        assistant_message.innerHTML = "اضغط علي  'أوافق' لبدء الأختبار";
}
//answer1-button function
answer1_btn.onclick = function(){
    if(questionIndex === 1 && questionField.innerHTML === questionObject1.question){
        questionIndex = 2;
        let span1 =  document.querySelector("#span-items :nth-child(1)");
        span1.classList.add("green-span");
        answer1_btn.classList.add("right-answer");
        answer1_btn.classList.remove("answer1-button");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score += 1;
        points.innerHTML = score;
        setTimeout(() => {
        startQuiz();
        }, (1000));
    }else if(questionIndex === 2 && questionField.innerHTML === questionObject2.question){
        questionIndex = 3;
        let span1 =  document.querySelector("#span-items :nth-child(2)");
        span1.classList.add("red-span");
        answer1_btn.classList.add("wrong-answer1");
        answer4_btn.classList.add("right-answer4");
        answer4_btn.classList.remove("answer4-button");
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score -= 1;
        points.innerHTML = score;
        setTimeout(() => {
            startQuiz();
            }, (1000));
    }else if(questionIndex === 3 && questionField.innerHTML === questionObject3.question){
        questionIndex = 4;
        let span1 =  document.querySelector("#span-items :nth-child(3)");
        span1.classList.add("red-span");
        answer1_btn.classList.add("wrong-answer1");
        answer1_btn.classList.remove("answer1-button");
        answer4_btn.classList.add("right-answer4");
        answer4_btn.classList.remove("answer4-button");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score -= 1;
        points.innerHTML = score;
        setTimeout(() => {
            startQuiz();
            }, (1000));
    }
    else if(questionIndex === 4 && questionField.innerHTML === questionObject4.question){
        questionIndex = 5;
        let span1 =  document.querySelector("#span-items :nth-child(4)");
        span1.classList.add("red-span");
        answer1_btn.classList.add("wrong-answer1");
        answer1_btn.classList.remove("answer1-button");
        answer2_btn.classList.remove("answer2-button");
        answer2_btn.classList.add("right-answer2");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score -= 1;
        points.innerHTML = score;
        setTimeout(() => {
            startQuiz();
            }, (1000));
}
else if(questionIndex === 5 && questionField.innerHTML === questionObject5.question){
    questionIndex = 6;
    let span1 =  document.querySelector("#span-items :nth-child(5)");
    span1.classList.add("red-span");
    answer1_btn.classList.add("wrong-answer1");
    answer1_btn.classList.remove("answer1-button");
    answer3_btn.classList.remove("answer3-button");
    answer3_btn.classList.add("right-answer3");
    answer1_btn.disabled = true;
    answer2_btn.disabled = true;
    answer3_btn.disabled = true;
    answer4_btn.disabled = true;
    score -= 1;
    points.innerHTML = score;
    setTimeout(() => {
        startQuiz();
        }, (1000));
}
}
//answer2-button function
answer2_btn.onclick = function(){
    if(questionIndex === 1 && questionField.innerHTML === questionObject1.question){
        questionIndex = 2;
        let span1 =  document.querySelector("#span-items :nth-child(1)");
        span1.classList.add("red-span");
        answer1_btn.classList.add("right-answer");
        answer1_btn.classList.remove("answer1-button");
        answer2_btn.classList.add("wrong-answer2");
        answer2_btn.classList.remove("answer2-button");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score -= 1;
        points.innerHTML = score;
        setTimeout(() => {
        startQuiz();
        }, (1000));
}else if( questionIndex === 2 && questionField.innerHTML == questionObject2.question){
    questionIndex = 3;
    let span2 =  document.querySelector("#span-items :nth-child(2)");
    span2.classList.add("red-span");
    answer2_btn.classList.add("wrong-answer2");
    answer2_btn.classList.remove("answer2-button");
    answer1_btn.disabled = true;
    answer2_btn.disabled = true;
    answer3_btn.disabled = true;
    answer4_btn.disabled = true;
    console.log("done")
    answer4_btn.classList.add("right-answer4");
    answer4_btn.classList.remove("answer4-button");
    score -= 1;
        points.innerHTML = score;
    setTimeout(() => {
        startQuiz();
        }, (1000));
    }else if( questionIndex === 3 && questionField.innerHTML == questionObject3.question){
        questionIndex = 4;
        let span2 =  document.querySelector("#span-items :nth-child(3)");
        span2.classList.add("red-span");
        answer2_btn.classList.add("wrong-answer2");
        answer2_btn.classList.remove("answer2-button");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        console.log("done")
        answer4_btn.classList.add("right-answer4");
        answer4_btn.classList.remove("answer4-button");
        score -= 1;
        points.innerHTML = score;
        setTimeout(() => {
            startQuiz();
            }, (1000));
        }else if( questionIndex === 4 && questionField.innerHTML == questionObject4.question){
            questionIndex = 5;
            let span2 =  document.querySelector("#span-items :nth-child(4)");
            span2.classList.add("green-span");
            answer2_btn.classList.add("right-answer2");
            answer2_btn.classList.remove("answer2-button");
            answer1_btn.disabled = true;
            answer2_btn.disabled = true;
            answer3_btn.disabled = true;
            answer4_btn.disabled = true;
            score += 1;
        points.innerHTML = score;
            setTimeout(() => {
                startQuiz();
                }, (1000));
            }
            else if( questionIndex === 5 && questionField.innerHTML == questionObject5.question){
                questionIndex = 6;
                let span2 =  document.querySelector("#span-items :nth-child(5)");
                span2.classList.add("red-span");
                answer2_btn.classList.add("wrong-answer2");
                answer2_btn.classList.remove("answer2-button");
                answer1_btn.disabled = true;
                answer2_btn.disabled = true;
                answer3_btn.disabled = true;
                answer4_btn.disabled = true;
                score -= 1;
                points.innerHTML = score;
                answer3_btn.classList.add("right-answer3");
                answer3_btn.classList.remove("answer3-button");
                setTimeout(() => {
                    startQuiz();
                    }, (1000));
                }
}
//Answer3-Button functions
answer3_btn.onclick = function(){
    if( questionIndex === 1 && questionField.innerHTML == questionObject1.question){
        questionIndex = 2;
        let span1 =  document.querySelector("#span-items :nth-child(1)");
        span1.classList.add("red-span");
        answer3_btn.classList.add("wrong-answer3");
        answer3_btn.classList.remove("answer3-button");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score -= 1;
        points.innerHTML = score;
        answer1_btn.classList.add("right-answer");
        answer1_btn.classList.remove("answer1-button");
        setTimeout(() => {
            startQuiz();
            }, (1000));
        }else if( questionIndex === 2 && questionField.innerHTML == questionObject2.question){
            questionIndex = 3;
            let span1 =  document.querySelector("#span-items :nth-child(2)");
            span1.classList.add("red-span");
            answer3_btn.classList.add("wrong-answer3");
            answer3_btn.classList.remove("answer3-button");
            answer1_btn.disabled = true;
            answer2_btn.disabled = true;
            answer3_btn.disabled = true;
            answer4_btn.disabled = true;
            answer4_btn.classList.add("right-answer4");
            answer4_btn.classList.remove("answer4-button");
            score -= 1;
        points.innerHTML = score;
            setTimeout(() => {
                startQuiz();
                }, (1000));
            }
            else if( questionIndex === 3 && questionField.innerHTML == questionObject3.question){
                questionIndex = 4;
                let span1 =  document.querySelector("#span-items :nth-child(3)");
                span1.classList.add("red-span");
                answer3_btn.classList.add("wrong-answer3");
                answer3_btn.classList.remove("answer3-button");
                answer1_btn.disabled = true;
                answer2_btn.disabled = true;
                answer3_btn.disabled = true;
                answer4_btn.disabled = true;
                answer4_btn.classList.add("right-answer4");
                answer4_btn.classList.remove("answer4-button");
                score -= 1;
            points.innerHTML = score;
                setTimeout(() => {
                    startQuiz();
                    }, (1000));
                }else if( questionIndex === 4 && questionField.innerHTML == questionObject4.question){
                    questionIndex = 5;
                    let span1 =  document.querySelector("#span-items :nth-child(4)");
                    span1.classList.add("red-span");
                    answer3_btn.classList.add("wrong-answer3");
                    answer3_btn.classList.remove("answer3-button");
                    answer1_btn.disabled = true;
                    answer2_btn.disabled = true;
                    answer3_btn.disabled = true;
                    answer4_btn.disabled = true;
                    answer2_btn.classList.add("right-answer2");
                    answer2_btn.classList.remove("answer2-button");
                    score -= 1;
                points.innerHTML = score;
                    setTimeout(() => {
                        startQuiz();
                        }, (1000));
                    }else if( questionIndex === 5 && questionField.innerHTML == questionObject5.question){
                        questionIndex = 6;
                        let span1 =  document.querySelector("#span-items :nth-child(5)");
                        span1.classList.add("green-span");
                        answer3_btn.classList.add("right-answer3");
                        answer3_btn.classList.remove("answer3-button");
                        answer1_btn.disabled = true;
                        answer2_btn.disabled = true;
                        answer3_btn.disabled = true;
                        answer4_btn.disabled = true;
                        score += 1;
                    points.innerHTML = score;
                        setTimeout(() => {
                            startQuiz();
                            }, (1000));
                        }
}
//Answer4-Button functions
answer4_btn.onclick = function(){
    if( questionIndex === 1 && questionField.innerHTML == questionObject1.question){
        questionIndex = 2;
        let span1 =  document.querySelector("#span-items :nth-child(1)");
        span1.classList.add("red-span");
        answer4_btn.classList.add("wrong-answer4");
        answer4_btn.classList.remove("answer4-button");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score -= 1;
    points.innerHTML = score;
        setTimeout(() => {
            startQuiz();
            }, (1000));
    }else if( questionIndex === 2 && questionField.innerHTML == questionObject2.question){
        questionIndex = 3;
        let span1 =  document.querySelector("#span-items :nth-child(2)");
        span1.classList.add("green-span");
        answer4_btn.classList.add("right-answer4");
        answer4_btn.classList.remove("answer4-button");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score += 1;
    points.innerHTML = score;
        setTimeout(() => {
            startQuiz();
            }, (1000));
    }else if( questionIndex === 3 && questionField.innerHTML == questionObject3.question){
        questionIndex = 4;
        let span1 =  document.querySelector("#span-items :nth-child(3)");
        span1.classList.add("green-span");
        answer4_btn.classList.add("right-answer4");
        answer4_btn.classList.remove("answer4-button");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score += 1;
    points.innerHTML = score;
        setTimeout(() => {
            startQuiz();
            }, (1000));
    }else if( questionIndex === 4 && questionField.innerHTML == questionObject4.question){
        questionIndex = 5;
        let span1 =  document.querySelector("#span-items :nth-child(4)");
        span1.classList.add("green-span");
        answer4_btn.classList.add("right-answer4");
        answer4_btn.classList.remove("answer4-button");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score += 1;
    points.innerHTML = score;
        setTimeout(() => {
            startQuiz();
            }, (1000));
    }else if( questionIndex === 5 && questionField.innerHTML == questionObject5.question){
        questionIndex = 6;
        let span1 =  document.querySelector("#span-items :nth-child(5)");
        span1.classList.add("red-span");
        answer4_btn.classList.add("wrong-answer4");
        answer4_btn.classList.remove("answer4-button");
        answer1_btn.disabled = true;
        answer2_btn.disabled = true;
        answer3_btn.disabled = true;
        answer4_btn.disabled = true;
        score += 1;
    points.innerHTML = score;
        setTimeout(() => {
            startQuiz();
            }, (1000));
    }
}

