var vehicles = "http://swapi.co/api/vehicles/";

$.getJSON(vehicles,
    function(vehicle) {
        var statusHTML = '<ul>';
        $.each(vehicle.results, function(i, vehicle) {
            statusHTML += '<li>';
            statusHTML += vehicle.name + '</li>';
            console.log(vehicle.name);
        });
        statusHTML += '</ul>';
        $('.vehicles').html(statusHTML)
    }); // end getJSON
