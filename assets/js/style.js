$(function(){
    $('#green').mouseover(function(){ // cible la div avec id green lui indique (mouseover) 
            $('#text').css('color', '#97c166'); // qu'au passage de la sourie le texte change de colo
        });
    $('#green').mouseout(function(){ // cible la div avec id green lui indique (mouseout)
            $('#text').css('color','#000000'); // qu'au passage de la sourie le texte change de colo (noir)
        });

    $('#red').mouseover(function(){
            $('#text').css('color','#b71f1f')
        });
    $('#red').mouseout(function(){
            $('#text').css('color','#000000');
        });

    $('#blue').mouseover(function(){
            $('#text').css('color','#5969e0')
        });
    $('#blue').mouseout(function(){
            $('#text').css('color','#000000');
        });
});