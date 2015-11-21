var geo = {
    
    getPosition:function(){
        alert("getPosition");
        navigator.geolocation.getCurrentPosition(geo.success, geo.error);
        
    },
                                                 
    success:function(pos){
     fn.drawMap(pos.coords.latitude, pos.coords.longitude);       
    },
        
    error:function(err){
        alert(err.code);
    }
}