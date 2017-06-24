var starships = "http://swapi.co/api/starships/";

$.getJSON(starships,
    function(starship) {
        var statusHTML = '<ul>';
        $.each(starship.results, function(i, starship) {
            statusHTML += '<li>';
            statusHTML += starship.name + '</li>';
            console.log(starship.name);
        }); // for each results
        statusHTML += '</ul>';
        $('.starships').html(statusHTML)
    }); // end getJSON
