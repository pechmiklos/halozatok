window.onload = () => {
    console.warn(":)");
    let hova = document.getElementById("pascal");
    for (var s = 0; s < 10; s++) {

        let sor = document.createElement("div");
        sor.classList.add("sor")
        hova.appendChild(sor)

        for (var o = 0; o < 10; o++) {
            let szám = document.createElement("div");
            szám.classList.add("doboz")
            szám.style.background = `rgb(${255 / 10 * s},0,${255 / 10 * o})`
            sor.appendChild(szám)
            szám.innerText = (s + 1) * (o + 1)

        }

    }
}