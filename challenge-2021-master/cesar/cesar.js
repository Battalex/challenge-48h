function cesarTesting(str){
    const need2BeCrypted = "password";
    const neededResult = "sdvvzrug";
    const beyond = "xyz";
    const beyondAttendu = "abc";
    console.log("var need2BeCrypted =\""+need2BeCrypted+"\";"+str)
    var result = new Function("var need2BeCrypted =\""+need2BeCrypted+"\";"+str)();
    var beyondRes = new Function("var need2BeCrypted =\""+beyond+"\";\n"+str)();
    console.log(result)
    if (result == "sdvvzrug") {
        window.location.href = "../rpg4.html";
    }
    return result == neededResult && beyondRes == beyondAttendu;
}
function takeInput(){
    var x = document.getElementById("cesar").value; 
    var result = cesarTesting(x);
    document.getElementById("Result").innerHTML = result;
    console.log(result);
}
