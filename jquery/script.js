$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = "hello";
        $('#result').append("<p>"+toAdd+"</p>");
    });
    $('#button').hover(function(){
        $(this).toggleClass('back');
    });
});