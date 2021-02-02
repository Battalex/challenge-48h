const texteElement = document.getElementById('texte')
const boutonOptionsElement = document.getElementById('boutonsOptions')

let etatobj = {}

let timerStart = false;

function commencer() {
  etatobj = {}
  afficherTexte(1)
}
function alertFin() {
    alert('Ca fait 20 minutes');
}
function afficherTexte(numTexte) {
    if (numTexte == 1) {
        timerStart = true;
    }
    if (numTexte > 1 && timerStart == true) {
        timerStart = false;
        setTimeout(alertFin, 1200000)
    }
    const textenum = textNodes.find(textenum => textenum.id === numTexte)
    texteElement.innerText = textenum.texte
    while (boutonOptionsElement.firstChild) {
        boutonOptionsElement.removeChild(boutonOptionsElement.firstChild)
    }

    textenum.options.forEach(option => {
        if (showOption(option)) {
          const button = document.createElement('button')
          button.innerHTML = option.texte
          button.classList.add('btn')
          button.addEventListener('click', () => selectOption(option))
          boutonOptionsElement.appendChild(button)
        }
      })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(etatobj)
  }

function selectOption(option){
    const idTexte = option.nextText
    if (idTexte <= 0){
        return commencer()
    }
    etatobj = Object.assign(etatobj, option.setState)
    afficherTexte(idTexte)
}

const textNodes = [
    //Portes étage 1
    {
        id: 1,
        texte: '[1] Choix d\'une porte sur les 3',
        options: [
            {
                texte: '<img src="images/door1.png" class="imgs"/>',
                nextText: 11
            },
            {
                texte: '<img src="images/door2.png" class="imgs"/>',
                nextText: 12
            },
            {
                texte: '<img src="images/door3.png" class="imgs"/>',
                nextText: 13
            }
        ]
    },
    {
        id: 11,
        texte: '',
        options: [
            {
                texte: '',
                nextText: 111
            },
            {
                texte: '',
                nextText: 112
            }
        ]
    },
    {
        id: 12,
        texte: '',
        options: [
            {
                texte: '',
                nextText: 121
            },
            {
                texte: '',
                nextText: 122
            }
        ]
    },
    {
        id: 13,
        texte: '[1] Porte 3',
        options: [
            {
                texte: '',
                nextText: 2
            }
        ]
    },
    //Portes étage 1

    //Portes étage 2
    {
        id: 2,
        texte: '[2] Choix d\'une porte sur les 3',
        options: [
            {
                texte: '<img src="images/door1.png" class="imgs"/>',
                nextText: 21
            },
            {
                texte: '<img src="images/door2.png" class="imgs"/>',
                nextText: 22
            },
            {
                texte: '<img src="images/door3.png" class="imgs"/>',
                nextText: 23
            }
        ]
    },
    
    {
        id: 21,
        texte: '[2] Porte 1',
        options: [
            {
                texte: '',
                nextText: 3
            },
        ]
    },
    {
        id: 22,
        texte: '',
        options: [
            {
                texte: '',
                nextText: 221
            },
            {
                texte: '',
                nextText: 222
            }
        ]
    },
    {
        id: 23,
        texte: '',
        options: [
            {
                texte: '',
                nextText: 231
            },
            {
                texte: '',
                nextText: 232
            }
        ]
    },
    //Portes étage 2
    
    //Portes étage 3
    {
        id: 3,
        texte: '[3] Choix d\'une porte sur les 3',
        options: [
            {
                texte: '<img src="images/door1.png" class="imgs"/>',
                nextText: 31
            },
            {
                texte: '<img src="images/door2.png" class="imgs"/>',
                nextText: 32
            },
            {
                texte: '<img src="images/door3.png" class="imgs"/>',
                nextText: 33
            }
        ]
    },

    {
        id: 31,
        texte: '',
        options: [
            {
                texte: '',
                nextText: 311
            },
            {
                texte: '',
                nextText: 312
            },
        ]
    },
    {
        id: 32,
        texte: '[3] Porte 2',
        options: [
            {
                texte: '',
                nextText: 4
            },
        ]
    },
    {
        id: 33,
        texte: '',
        options: [
            {
                texte: '',
                nextText: 331
            },
            {
                texte: '',
                nextText: 332
            }
        ]
    },
    //Portes étage 3
    
    //Portes étage 4
    {
        id: 4,
        texte: 'Fin',
        options: [
            {
                texte: 'Recommencer',
                nextText: -1
            },
        ]
    },
    //Portes étage 4
    
]

commencer();