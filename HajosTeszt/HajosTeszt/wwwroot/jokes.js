
fetch("api/jokes/count")
    .then(result => result.text())
    .then(data => viccBetöltés(data))

function viccBetöltés(darabszám) {
    for (var i = 1; i < darabszám; i++) {
        fetch(`api/jokes/${i}`)
            .then(response => {
                if (!response.ok) {
                    console.error(`Hibás válasz: ${response.status}`)
                }
                else {
                    return response.json()
                }
                })
            .then(data => viccMegjelenítés(data))

    }
}

function viccMegjelenítés(vicc) {
    console.log(vicc);
    document.getElementById("jokeList").innerHTML += vicc.jokeText + "<br/>";
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