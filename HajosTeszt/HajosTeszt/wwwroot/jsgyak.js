window.onload = () => {
    console.warn(":)");
    var faktorialisR = (n) => {
        if (n === 0 || n === 1) {
            return 1;

        } else {
            return n * faktorialisR(n - 1);
        }
    }
    let hova = document.getElementById("pascal");
    for (var s = 0; s < 10; s++) {

        let sor = document.createElement("div");
        sor.classList.add("sor")
        hova.appendChild(sor)

        for (var o = 0; o < s; o++) {
            let szám = document.createElement("div");
            szám.classList.add("doboz")
            let c = faktorialisR(s - 1) / (faktorialisR(o) * faktorialisR(s - 1 - o))
            szám.style.background = `rgb(${255-30*c},0,0)`
            sor.appendChild(szám)
           
            szám.innerText = c

        }

    }
}