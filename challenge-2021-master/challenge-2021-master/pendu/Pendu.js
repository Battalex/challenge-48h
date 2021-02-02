/*  Variables de départ rattacher au code html */
const intro = document.querySelector(".intro");
const boutonordi = document.getElementById("ordi");
const creerDiv = document.getElementById("creer");
const gameDiv = document.querySelector(".game");
const canvas = document.getElementById("canvas");
const ligne = canvas.getContext("2d");
const categoriesDiv = document.getElementById("categories");
const lettres = document.getElementById("lettres");
const viesDiv = document.getElementById("vies");
const numscoreDiv = document.getElementById("numscore");
let mot_a_trouver;
let bonne_rep;
let score = 0;
let vies;
let word;

// Catégories avec leurs mots correspondants pour le mode vs ordi
const categories = {
    challenge:["gag","coccyx","awale","moult","azimut","puzzle"]
};

// Simule les lettres d'un clavier numérique
const clavier_num = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Bouton du menu. Choix : joueur vs ordi ou 1 vs 1
boutonordi.addEventListener("click", startgame);

/* Fonction de départ de joueur vs ordi*/
function startgame() {
    ini();
    // Choisir une catégorie et construire une liste en fonction des éléments
    const cat = Object.keys(categories);
    let catContent = "<ul id='liste_cat'>";
    cat.forEach(element => {
        catContent += `
    <li>${element}</li>
    `;
    });
    catContent += "</ul>";
    categoriesDiv.innerHTML = `<p>Choisis une catégories :</p> ${catContent}`;
    showwins();
}

// initialise le jeu avec les variables de départ
function ini() {
    vies = 10;
    bonne_rep = 0;
    categoriesDiv.addEventListener("click", choix_cat);
    lettres.addEventListener("click", usedletters);

    lettres.innerHTML = "";
    viesDiv.innerText = "";

    canvas.style.display = "none";
    ligne.clearRect(0, 0, 400, 250);

    gameDiv.style.display = "block";
    boutonordi.style.visibility = "hidden";
    // boutonplayer.style.visibility = "hidden";
}

// fonction qui permettra de dessiner les lignes du dessin du pendu
function dessin_ligne(toX, toY, lineX, lineY, round = false) {
    ligne.strokeStyle = "#fff";
    ligne.beginPath();

    if (round) {
        ligne.arc(toX, toY, lineX, lineY, 2 * Math.PI);
    } else {
        ligne.moveTo(toX, toY);
        ligne.lineTo(lineX, lineY);
    }

    ligne.stroke();
}

// On choisit la catégorie puis il sort un mot au hasard dans cette catégorie grace à la fonction cat_mot. 
function choix_cat(e) {
    let li = e.target;
    if (li.tagName === "LI") {
        let chosenCat = li.innerText;
        let guess = categories[li.innerHTML];

        categoriesDiv.removeEventListener("click", choix_cat);
        cat_mot(guess, chosenCat);
    }
}

function cat_mot(guess, chosenCat) {
    // Choisis au hasard un mot de la catégorie choisie
    let random = Math.floor(Math.random() * guess.length);
    //  Stock le mot dans un tableau
    mot_a_trouver = guess[random];

    // console.log(mot_a_trouver);

    // Met en place le jeu du pendu en regardant le mot dans la catégorie selectionnée
    let content = `<p> ${chosenCat} </p><ul>`;
    for (let i = 0; i < mot_a_trouver.length; i++) {
        // Affiche les traits vide en fonction de la taille du mot
        content += `<li>_</li>`;
    }
    content += "</ul>";
    // Stocker le tout dans la div catégorie se trouvant dans mon HTML
    categoriesDiv.innerHTML = content;

    // Affiche le dessin et le nombre de vies restantes
    canvas.style.display = "block";
    viesDiv.innerText = ` Il te reste ${vies} vie(s)`;
    clavier();
}

// grace aux lettres se trouvant dans clavier_num mets en place les lettres
function clavier() {
    let content = `<ul>`;

    for (let i = 0; i < clavier_num.length; i++) {
        content += `<li> ${clavier_num[i]} </li>`;
    }
    content += `</ul>`;
    lettres.innerHTML = content;
}

// Si on clique sur la lettre du clavier numerique par la suite il check si elle se trouve dans le mot
function usedletters(e) {
    let li = e.target;
    if (li.tagName === "LI" && !li.classList.contains("clicked")) {
        li.classList.add("clicked");
        let letter = li.innerText;
        check(letter, mot_a_trouver);
    }
}

// Affiche le score
function showwins() {
    numscoreDiv.innerHTML = score;
}

// Vérifie si les lettres se trouvent dans le mots sélectionné ou non
function check(letter, mot_a_trouver) {
    letter = letter.toString().toLowerCase();
    mot_a_trouver = mot_a_trouver.toString().toLowerCase();
    let totalToWin = mot_a_trouver.length;

    // regarde dans le mot si la lettre selectionnée s'y trouve
    for (let i = 0; i < mot_a_trouver.length; i++) {
        if (mot_a_trouver[i] === letter) {
            let correctLi = categoriesDiv.getElementsByTagName("li")[i];
            // Si oui l'afficher sur le trait
            correctLi.innerText = letter;
            bonne_rep++;
        }
    }

    // regarde si lettre correspond, sinon il enleve une vie et dessine le pendu
    if (mot_a_trouver.indexOf(letter) < 0) {
        vies--;
        viesDiv.innerText = ` il te reste ${vies} vie(s)`;
        dessin_pendu(vies);
        if (vies === 0) endgame("loose");
    }

    if (bonne_rep === totalToWin) endgame("win");
}

/* dessin du pendu en dur par rapport aux vies */
function dessin_pendu(vies) {
    switch (vies) {
        case 9:
            dessin_ligne(100, 150, 100, 10);
            break;
        case 8:
            dessin_ligne(90, 145, 250, 145);
            break;
        case 7:
            dessin_ligne(100, 20, 200, 20);
            break;
        case 6:
            dessin_ligne(200, 20, 200, 30);
            break;
        case 5:
            dessin_ligne(200, 37, 8, 0, true);
            break;
        case 4:
            dessin_ligne(200, 45, 200, 80);
            break;
        case 3:
            dessin_ligne(200, 80, 190, 110);
            break;
        case 2:
            dessin_ligne(200, 80, 210, 110);
            break;
        case 1:
            dessin_ligne(200, 50, 190, 80);
            break;
        case 0:
            dessin_ligne(200, 50, 210, 80);
            break;
    }
}

// fonction permettant de laisser un petit message au(x) joueur(s)
function endgame(txt) {

    if (txt === "win") {
        score = score + 1;
        showwins();
        viesDiv.innerText = 'Bravo ! tu as trouvé le mot mystère.'
    } else{ 
        boutonordi.innerText = "Rejouer ?";
        boutonordi.style.visibility = "visible";
        viesDiv.innerText = 'Perdu ! Retentes ta chance.'
    }

    lettres.removeEventListener("click", usedletters);
}

function checkword(letters, word) {
    letters = letters.toString().toLowerCase();
    word = word.toString().toLowerCase();
    let totalToWinword = word.length;

    // regarde dans le mot si la lettre selectionnée s'y trouve
    for (let i = 0; i < word.length; i++) {

        if (word[i] === letters) {
            let correctLiw = creerDiv.getElementsByTagName("li")[i];
            correctLiw.innerText = letters;
            bonne_rep++;
        }
    }

    // regarde si lettre correspond, sinon il enleve une vie et dessine le pendu
    if (word.indexOf(letters) < 0) {
        vies--;
        viesDiv.innerText = ` il te reste ${vies} vie(s)`;
        dessin_pendu(vies);
        if (vies === 0) endgame("loose");
    }

    if (bonne_rep === totalToWinword) endgame("win");
}

function lettersused(ex) {
    let liw = ex.target;
    if (liw.tagName === "LI" && !liw.classList.contains("clicked")) {
        liw.classList.add("clicked");
        let letters = liw.innerText;
        checkword(letters, word);
    }
}
