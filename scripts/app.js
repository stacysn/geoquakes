let weekly_quakes_endpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
let map;

$(document).ready(function() {
  initMap();
  getQuakes();

  function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: 37.7749, lng: -122.4194},
      zoom:8
    });
  };

  function getQuakes(){
    $.ajax({
      method: "GET",
      url: weekly_quakes_endpoint,
      dataType: 'json',
      success: onSuccess
    });

    function onSuccess(responseData){
      let quakeArray = responseData.features;

      quakeArray.forEach(function(quake){

        let title = quake.properties.title;

        // $("#info").append(`<p> ${quake.properties.title}</p>`);
        let hoursAgo = Math.round((Date.now() - quake.properties.time) / (1000 * 60 * 60));
        $("#info").append("<p>" + title + " / " + hoursAgo + " hours ago</p");

        let lat = quake.geometry.coordinates[1];
        let lng = quake.geometry.coordinates[0];
        setMarkers(lat,lng, title);
      });
    };
  };
});

function setMarkers(lat, lng, title){
  new google.maps.Marker({
    position: {lat: lat, lng: lng},
    map: map,
    title: title
  });
};
