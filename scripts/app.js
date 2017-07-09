// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  initMap();
  $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,
    dataType: 'json',
    success: onSuccess
  });
  // $('#map').append(function onSuccess(responseData)){
  //   return responseData;
  // })
});

function onSuccess(responseData){
  // var random = responseData.features[0].properties.title;
  let quakeArray = responseData.features;
  quakeArray.forEach(function(quake){
    console.log(quake.properties.title);
    $("#info").append(`<p> ${quake.properties.title}</p>`);
  });
}

function initMap(){
  let map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: 37.7749, lng: -122.4194},
    zoom:8
  });

  let marker = new google.maps.Marker({
    position: {lat: 37.7749, lng: -122.4194} ,
    map: map
    // title: "Sanity Check", //do we need this Title? //what's the point of this?
  });

};
