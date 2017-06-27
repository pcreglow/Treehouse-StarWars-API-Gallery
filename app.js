    var starships = "http://swapi.co/api/starships/";

    $.getJSON(starships,
        function(starship) {
            var statusHTML = '<ul class="starships">';
            $.each(starship.results, function(i, starship) {
                statusHTML += '<li class="starship">';
                statusHTML += starship.name + '</li>';
            }); // for each starship results
            statusHTML += '</ul>';
            $('.starshipsFleet').html(statusHTML);


            $(".starship").click(function(data) {

              var shipClass = $(this).text();

              var starshipSearch = "http://swapi.co/api/starships/?search=" + shipClass;

              $.getJSON(starshipSearch,
                  function(shipData) {
                    var shipHTML = '<div class="lightbox">'
                    $.each(shipData.results, function(i, shipData) {
                     shipHTML +='<h4>' + shipData.name + '</h4>';
                     shipHTML +='<p>Model: ' + shipData.model + '</p>';
                     shipHTML +='<p>Manufacturer: ' + shipData.manufacturer + '</p>';
                     shipHTML += '</div>';
                  }); // for each shipData results
                    console.log(shipHTML);
                    
                  }); // end getJSON starshipSearch
            }); // click handler for starship li
        }); // end getJSON starships
