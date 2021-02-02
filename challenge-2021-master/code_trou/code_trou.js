function erreurl(numliste) {
    laliste = eval("form1.liste" + numliste);
    return laliste[laliste.selectedIndex].value;
}

function message(erreurs) {
    if (erreurs == 0){
        alert('Bravo, le code est juste !');
        window.location.href = "../rpg2.html";
    } 
    else if (erreurs == 1) {
        alert('Tu as fait une erreur !');
        window.location.href = "../rpg2.html";
    } 
    else alert('Tu as fait ' + erreurs + ' erreurs !');
}

function verif() {
    erreurs = 0;
    if (form.rep1.value != ",") erreurs++;
    if (form.rep2.value != ",") erreurs++;
    if (form.rep3.value != "facto_while(a)") erreurs++;
    if (form.rep4.value != "()") erreurs++;
    message(erreurs);
}