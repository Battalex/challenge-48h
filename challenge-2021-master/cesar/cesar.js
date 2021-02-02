function cesarTesting(str) {
    var string = "";
    for (let x = 0; x < str.length; x++) {
        if (str[x] != "\n") {
            string += str[x];
        }
    }
    const need2BeCrypted = "password";
    const neededResult = "sdvvzrug";
    const beyond = "xyz";
    const beyondAttendu = "abc";
    var result = new Function("var need2BeCrypted =\"" + need2BeCrypted + "\";\n" + str)();
    var beyondRes = new Function("var need2BeCrypted =\"" + beyond + "\";\n" + str)();
    return result == neededResult && beyondAttendu == beyondRes;
}

function takeInput() {
    var x = document.getElementById("cesar").value;
    var result = cesarTesting(x);
    document.getElementById("Result").innerHTML = result;
    // console.log(result);
}