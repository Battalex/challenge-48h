$('#valid_sentence').click(function(){
    if(($('#letter_1').val() == 'o') && ($('#letter_2').val() == 'r') && ($('#letter_3').val() == 'a') && ($('#letter_4').val() == 'c') && ($('#letter_5').val() == 'l') && ($('#letter_6').val() == 'e')){
        alert('ok');
        window.location.href = "../rpg3.html";
    }
});

$('#info_sentence').click(function(){
    if($('#info_bubble').hasClass('diplay_none')){
        $('#info_bubble').removeClass('diplay_none');
    }
    else{
        $('#info_bubble').addClass('diplay_none');
    }
});