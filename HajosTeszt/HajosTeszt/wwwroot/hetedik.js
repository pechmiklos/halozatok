var kérdések;
var k = 1;

var hotList = [];           
var questionsInHotList = 3; 
var displayedQuestion;      
var numberOfQuestions;      
var nextQuestion = 1; 
var timeoutHandler;

window.onload = init();

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) { //!!!!!!!!!!!!!
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
                }
            }
        );
}


function init() {
    let l = window.localStorage.getItem("lista")
    if (l) {
        console.log("Volt már listánk")
        hotList = JSON.parse(l);
        displayedQuestion = 0;
        kérdésMegjelenítés();
    }
    else {


        for (var i = 0; i < questionsInHotList; i++) {
            let q = {
                question: {},
                goodAnswers: 0
            }
            hotList[i] = q;
        }

        for (var i = 0; i < questionsInHotList; i++) {
            kérdésBetöltés(nextQuestion, i);
            nextQuestion++;
        }
    }
}



function kérdésMegjelenítés() {
    let kérdés = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("válasz1").style.removeProperty("background");
    document.getElementById("válasz2").style.removeProperty("background");
    document.getElementById("válasz3").style.removeProperty("background");
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
    document.getElementById("válasz1").innerText = kérdés.answer1;
    document.getElementById("válasz2").innerText = kérdés.answer2;
    document.getElementById("válasz3").innerText = kérdés.answer3;
    document.getElementById(`válasz1`).style.pointerEvents = "auto";
    document.getElementById(`válasz2`).style.pointerEvents = "auto";
    document.getElementById(`válasz3`).style.pointerEvents = "auto";
    
    if (kérdés.image !="") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kép1").src = "";
    }
    jóválasz = kérdés.correctAnswer;
}




function előrekattintás() {
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()
    clearTimeout(timeoutHandler)
    
    
    
    
    
}

function visszakattintás() {
    displayedQuestion--;
    if (displayedQuestion == -1) {
        displayedQuestion = questionsInHotList-1;
    }

    kérdésMegjelenítés()
    
}

function válaszok(v) {
    if (v == jóválasz) {
        document.getElementById("válasz" + v).style.background = "green";
        hotList[displayedQuestion].goodAnswers++;
        if (hotList[displayedQuestion].goodAnswers == 3) {
            kérdésBetöltés(nextQuestion, displayedQuestion);
            nextQuestion++;
            hotList[displayedQuestion].goodAnswers = 0;
        }
        
    }
    else {
        document.getElementById("válasz" + v).style.background = "red";
        document.getElementById("válasz" + jóválasz).style.background = "green";
        hotList[displayedQuestion].goodAnswers = 0;
        
    }
    document.getElementById(`válasz1`).style.pointerEvents = "none";
    document.getElementById(`válasz2`).style.pointerEvents = "none";
    document.getElementById(`válasz3`).style.pointerEvents = "none";
    timeoutHandler = setTimeout(előrekattintás, 3000);
    window.localStorage.setItem("lista", JSON.stringify(hotList))
    window.localStorage.setItem("nextQ", nextQuestion)
}






    
