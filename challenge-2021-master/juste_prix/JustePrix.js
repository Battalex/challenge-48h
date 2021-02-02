var nb_coup = 0;
var nb = Math.floor(100 * Math.random());

function jeux() {
    var nombre = document.getElementById('solution').value;

    nb_coup++;

    if (nombre < nb) {
        alert("c'est plus");
        document.getElementById('solution').value = '';
    }
    if (nombre > nb) {
        alert("c'est moins");
        document.getElementById('solution').value = '';
    }
    if (nombre == nb) {
        alert("Bravo , le nombre était " + nb + " Tu as gagné en " + nb_coup + " coup(s)");
    }
}