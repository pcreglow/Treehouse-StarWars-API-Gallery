$(document).ready(function() {

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

            var $lightbox = $('<div id="lightbox"></div>');
            $("#container").append($lightbox);

            $(".starship").click(function(event) {
                var shipClass = $(this).text();
                var starshipSearch = "http://swapi.co/api/starships/?search=" + shipClass;

                $.getJSON(starshipSearch,
                    function(shipData) {
                        var requestedShip = shipData.results[0];
                        console.log(requestedShip);
                        var shipHTML = '<h4>' + requestedShip.name + '</h4>';
                        shipHTML += '<p>Model: ' + requestedShip.model + '</p>';
                        shipHTML += '<p>Manufacturer: ' + requestedShip.manufacturer + '</p>';

                        $lightbox.html(shipHTML);
                        $lightbox.show();
                    }); // end getJSON starshipSearch

            }); // click handler for starship li

            $("#lightbox").click(function() {
                $(this).hide();
            }); // hide lightbox

        }); // end getJSON starships
});
