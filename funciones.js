$(document).ready(function() {
    $('.house').click(function() {
        var id = $(this).attr("id");
        var datos="";
        $.get("https://anapioficeandfire.com/api/houses/" + id + "/", function(res) {
            datos+="<p><span>Name: </span>" + res.name + "</p><br>";
            datos+="<p><span>Words: </span>" + res.words + "</p><br>";
            datos+="<p><span>Titles: </span><ul>";
            for(var i=0;i< res.titles.length;i++){
                datos+= "<li>" + res.titles[i] + "</li>";
            }
            datos+= "<ul>";
            $('.dates').html(datos);
        }, 'json');
    
        
    });
});