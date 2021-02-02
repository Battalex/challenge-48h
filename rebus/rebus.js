function GameAnswer() {
    let test = document.getElementById('rébus').value;
    if (test == "Jouan" || test == "jouan" || test == "JOUAN" || test == "JOuan" || test == "JOUan" || test == "JOUAn") {
        console.log("vrai");
        alert("Cette porte ne vous a pas permit d'avancer, cependant voici un indice : la bonne porte n'est pas rouge");
        window.location.href = "../rpg3.html";
    } else {
        console.log("faux");
    }
}