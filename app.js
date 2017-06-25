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
        $('.starshipsFleet').html(statusHTML);

        $(".starship").click(function(event) {
            var lightbox = '<div id="lightbox">';
            lightbox += '<p>' + "Star Wars" + '</p>';
            lightbox += '</div>';
            $("body").append(lightbox);
            $("#lightbox").show();
            $('#lightbox').click(function(event) {
                $("#lightbox").hide();
            });
        }); // end Lightbox
    }); // end getJSON
