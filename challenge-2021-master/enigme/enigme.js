function enigma(str){
    var answer = str.indexOf("prénom")
    if(answer==-1){
        var answer = str.indexOf("Prénom")
    }
    return answer>-1;
}
function takeInput(){
    var x = document.getElementById("enigme").value; 
    var result = enigma(x);
    document.getElementById("Result").innerHTML = result;
    if (result == true) {
        alert("Cette porte ne vous a pas permit d'avancer, cependant voici un indice : la bonne porte n'est pas bleue");
        window.location.href = "../rpg.html";
    }
    console.log(result)
}   