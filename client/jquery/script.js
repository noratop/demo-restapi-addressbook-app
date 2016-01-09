$(document).ready(function(){
    $('#listEntriesButton').click(function(){
        var filter = '?filter={"order": "firstName ASC"}'
        $.ajax({
          method: "GET",
          url: "/api/Entries"+filter,
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
    
    $('#addThisEntry').click(function(){
        
        if (!$("input[id=firstName]").val()) {alert("Please enter a first name"); return;}
        if (!$("input[id=lastName]").val()) {alert("Please enter a last name"); return;}

        var data = {
            "firstName" : $("input[id=firstName]").val(),
            "lastName" : $("input[id=lastName]").val()
        }
        
        if ($("input[id=birthday]").val()) {data.birthday = $("input[id=birthday]").val()}

        console.log(data);
        console.log(JSON.stringify(data));
        
        $.ajax({
            type: "POST",
            url: "api/AddressBooks/1/entries",
            data: JSON.stringify(data),
            contentType:"application/json",
        })
        .done(function(res) {
            console.log(res);
            if(res) $('#response').append("<p>"+res.firstName+" "+res.lastName+" has been added to the address book "+res.addressBookId+"</p>");
        });    
    });    

    $('.button').hover(function(){
        $(this).toggleClass('back');
    });
});