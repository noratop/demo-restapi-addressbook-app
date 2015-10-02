$(document).ready(function(){
    $('div').click(function(){
        var filter = '?filter={"order": "firstName ASC"}'
        $.ajax({
          method: "GET",
          url: "https://loopback-workshop-noratop.c9.io/api/Entries"+filter,
          dataType: "JSON"
        })
        .done(function( msg ) {
            //alert( "Data Saved: " + msg );
            msg.forEach(function(entry){
                console.log(entry);
                $('#result').append("<li>"+entry.firstName+" "+entry.lastName+"</li>");
            })
        });    
    });
    $('.button').hover(function(){
        $(this).toggleClass('back');
    });
});