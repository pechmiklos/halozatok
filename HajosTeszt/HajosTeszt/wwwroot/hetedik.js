var kérdések;
var k = 0;
function letöltés (data) {
    fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}
window.onload = letöltés;

function kérdésMegjelenítés(kérdés) {
    document.getElementById("válasz1").style.removeProperty("background");
    document.getElementById("válasz2").style.removeProperty("background");
    document.getElementById("válasz3").style.removeProperty("background");
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;
    
}

function előrekattintás() {
    k++;
    if (k == kérdések.length) {
        k = 0;

    }
    kérdésMegjelenítés(k);
    
}

function visszakattintás() {
    if (k > 0) {
        k = k - 1;
    }
    else {
        k = kérdések.length - 1;
    }
    kérdésMegjelenítés(k);

}

function válaszok(v) {
    if (v == kérdések[k].correctAnswer) {
        document.getElementById("válasz" + v).style.background = "green";
    }
    else {
        document.getElementById("válasz" + v).style.background = "red";
    }
}




    
