var nb_coup = 0;
var nb = Math.floor(100 * Math.random());

function jeux() {
    var nombre = document.getElementById('solution').value;

    nb_coup++;

    if (nombre < nb) {
        document.getElementById('response_number').innerHTML = nombre + ' : C\'est plus';
        document.getElementById('solution').value = '';
    }
    if (nombre > nb) {
        document.getElementById('response_number').innerHTML = nombre + ' : C\'est moins';
        document.getElementById('solution').value = '';
    }
    if (nombre == nb) { //victoire du joueur
        alert("Bravo, le nombre était " + nb + "\nTu as gagné en " + nb_coup + " coup(s)");
        alert("Cette porte ne vous a pas permit d'avancer, cependant voici un indice : la bonne porte n'est pas verte");
        window.location.href = "../rpg3.html";
    }
}