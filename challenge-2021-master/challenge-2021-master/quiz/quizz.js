var number = 100;
var answer = 0;
var win = false;
function Next(){
    document.getElementById(number).style.display = "none";
    number++
    if(number<107){
        document.getElementById(number).style.display = "flex";
    }else{
        if(number==107){
            if(document.getElementById(2).checked== true){
                answer++
            }
            if(document.getElementById(5).checked==true){
                answer++
            }
            if(document.getElementById(7).checked==true){
                answer++
            }
            if(document.getElementById(13).checked==true){
                
            }
            if(document.getElementById(16).checked==true){
                answer++
            }
            if(document.getElementById(20).checked==true){
                answer++
            }
            if(document.getElementById(23).checked==true){
                answer++
            }
            if(answer>=4){
                win=true;
            }else{
                number = 100;
                document.getElementById(number).style.display = "flex";
            }
        }
    }
}