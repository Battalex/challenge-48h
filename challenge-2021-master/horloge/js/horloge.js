
$('#valid_hour').click(function(){
    if(($('#number_1').val() == 3) && ($('#number_2').val() == 6) && ($('#number_3').val() == 2) && ($('#number_4').val() == 4)){
        alert('ok');
        window.location.href = "../rpgFin.html";
    }
});

$('#info_hour').click(function(){
    if($('#info_bubble').hasClass('diplay_none')){
        $('#info_bubble').removeClass('diplay_none');
    }
    else{
        $('#info_bubble').addClass('diplay_none');
    }
});