var fn = {
    ready:function(){
        alert("ready");
        //Compruebta que las librerias de phonegap esten cargadas
       document.addEventListener("deviceready", geo.getPosition, false);

        
    },
    init:function() {
				fn.drawMap(19.3507403, -97.8971323);
    },
    drawMap: function(lat, lng){
        //Posición del mapa
				var latlng = new google.maps.LatLng(lat, lng);
				var myOptions = {
					zoom: 8,
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


//$(fn.init);
$(fn.ready);
