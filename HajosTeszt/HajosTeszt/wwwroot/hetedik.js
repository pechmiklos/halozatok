var kérdések;
var k = 1
window.onload = kérdésBetöltés(1);
function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
} 

function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("válasz1").style.removeProperty("background");
    document.getElementById("válasz2").style.removeProperty("background");
    document.getElementById("válasz3").style.removeProperty("background");
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
    document.getElementById("válasz1").innerText = kérdés.answer1;
    document.getElementById("válasz2").innerText = kérdés.answer2;
    document.getElementById("válasz3").innerText = kérdés.answer3;
    
    if (kérdés.image !="") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kép1").src = "";
    }
    jóválasz = kérdés.correctAnswer;
}

function előrekattintás() {
    if (k<859) {
        k++;
    }
    else {
        k = 1;
    }
    
    kérdésBetöltés(k);
    
}

function visszakattintás() {
    if (k > 1) {
        k = k - 1;
    }
    else {
        k = 859;
    }
    kérdésBetöltés(k);
}


function válaszok(v) {
    if (v == jóválasz) {
        document.getElementById("válasz" + v).style.background = "green";
    }
    else {
        document.getElementById("válasz" + v).style.background = "red";
    }
}




    
