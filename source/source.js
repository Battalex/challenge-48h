function HoleCode() {
    let test = document.getElementById('code').value;
    if (test == "fS82oMgAZh") {
        console.log("vrai");
        alert("Cette porte ne vous a pas permit d'avancer, cependant voici un indice : la bonne porte n'est pas rouge");
        window.location.href = "../rpg.html";
    } else {
        console.log("faux");
    }
}