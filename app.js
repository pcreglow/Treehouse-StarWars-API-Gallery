var starships = "http://swapi.co/api/starships/";

$.getJSON(starships,
    function(starship) {
        var statusHTML = '<ul class="starships">';
        $.each(starship.results, function(i, starship) {
            statusHTML += '<li class="starship">';
            statusHTML += starship.name + '</li>';
            console.log(starship.name);
        }); // for each results
        statusHTML += '</ul>';
        $('.starshipsFleet').html(statusHTML)
    }); // end getJSON
