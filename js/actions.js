var fn = {
    ready: function () {
        //document.addEventListener("deviceready", fn.init, false);
        document.addEventListener("deviceready", geo.getPosition, false);
    },
    init: function () {
        //fn.drawMap(19.065799, -98.218368);
        geo.getPosition();
    },
    drawMap: function (lat, lng) {
        //Posición del mapa
        var latlng = new google.maps.LatLng(lat, lng);
        var myOptions = {
            zoom: 16,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
        //Marcador
        var marker = new google.maps.Marker({
            position: latlng, 
            map: map, 
            title:"Mi posición"
        });        
    }
}
$(fn.ready);