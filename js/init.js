(function($){
  $(function(){

    $('.carousel').carousel({full_width: true, indicators: true});


    $('#map').addClass("map leaflet-map leaflet-container leaflet-fade-anim");
    var osmUrl = 'http://tiles.memomaps.de/tilegen/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
    var map = L.map('map').setView([52.5436137,13.185618], 16).addLayer(osm);
    L.marker([52.5436137,13.185618]).addTo(map);


  }); // end of document ready
})(jQuery); // end of jQuery name space



// display maps



