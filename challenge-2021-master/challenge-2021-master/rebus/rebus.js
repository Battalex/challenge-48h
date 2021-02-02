function GameAnswer() {
    let test = document.getElementById('rébus').value;
    if (test == "Jouan" || test == "jouan" || test == "JOUAN" || test == "JOuan" || test == "JOUan" || test == "JOUAn") {
        console.log("vrai");
    } else {
        console.log("faux");
    }
}