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
    console.log(result)
}   