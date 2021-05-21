
function Viccbetoltes() {
    fetch('api/jokes')
        .then(result => {
            if (!result.ok) {
                console.error(`Hibás letöltés: ${result.status}`);
            }
            else {
                return result.json();
            }
        })
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                document.getElementById("jokeList").innerHTML += data[i].jokeText + "<br/>";
            }
        })
}
window.onload = () => {
    Viccbetoltes();
}
 
document.getElementById("addButton").addEventListener("click", () => {

    //Ezt az objektumot fogjuk átküldeni
    let data = {
        jokeText: document.getElementById("jokeText").value
    }


    fetch("api/jokes",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    ).then(x => {
        if (x.ok) {
            alert("Siker");

        }
        else {
            alert("Kudarc");
        }
    });

});