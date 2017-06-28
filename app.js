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
                        var shipHTML = '<h1>' + requestedShip.name + '</h1>';
                        shipHTML += '<div class="shipinfo">';
                        shipHTML += '<h4><span>Model:</span> ' + requestedShip.model + '</h4>';
                        shipHTML += '<h4><span>Manufacturer:</span> ' + requestedShip.manufacturer + '</h4>';
                        shipHTML += '<h4><span>Starship Class:</span> ' + requestedShip.starship_class + '</h4>';
                        shipHTML += '<h4><span>Hyperdrive Rating:</span> ' + requestedShip.hyperdrive_rating+ '</h4>';
                        shipHTML += '<h4><span>Megalight:</span> ' + requestedShip.MGLT + '</h4>';
                        shipHTML += '</div>';
                        $lightbox.html(shipHTML);
                        $lightbox.show();
                    }); // end getJSON starshipSearch

            }); // click handler for starship li

            $("#lightbox").click(function() {
                $(this).hide();
            }); // hide lightbox

        }); // end getJSON starships
});
