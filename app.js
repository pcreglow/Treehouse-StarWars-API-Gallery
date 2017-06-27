    var starships = "http://swapi.co/api/starships/";

    $.getJSON(starships,
        function(starship) {
            var statusHTML = '<ul class="starships">';
            $.each(starship.results, function(i, starship) {
                statusHTML += '<li class="starship">';
                statusHTML += starship.name + '</li>';
            }); // for each results
            statusHTML += '</ul>';
            $('.starshipsFleet').html(statusHTML);


            $(".starship").click(function(data) {

              var shipClass = $(this).text();

              var starshipSearch = "http://swapi.co/api/starships/?search=" + shipClass;

              $.getJSON(starshipSearch,
                  function(shipData) {
                    var shipHTML = '<p>'
                    $.each(shipData.results, function(i, shipData) {
                     shipHTML += shipData.model;
                    shipHTML += '</p>';
                  });
                    console.log(shipHTML);
                  });
            }); // click handler for starshi li
        }); // end getJSON
