// // define globals
// var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
// var map;
//
// $(document).ready(function() {
//   // console.log("Let's get coding!");
//   // CODE IN HERE!
//   initMap();
//   $.ajax({
//     method: 'GET',
//     url: weekly_quakes_endpoint,
//     dataType: 'json',
//     success: onSuccess
//   });
//   // $('#map').append(function onSuccess(responseData)){
//   //   return responseData;
//   // })
// });
//
// // var random = responseData.features[0].properties.title;
// function onSuccess(responseData){
//   let quakeArray = responseData.features;
//   console.log("Sanity Check");
//
//   quakeArray.forEach(function(quake){
//     let title = quake.properties.title;
//
//     $("#info").append(`<p> ${title}</p>`);
//
//
//   });
// }
//
// function initMap(){
//     map = new google.maps.Map(document.getElementById('map'),{
//     center: {lat: 37.7749, lng: -122.4194},
//     zoom:8
//   });
//   var lat = quake.geometry.coordinates[1];
//   var long = quake.geometry.coordinates[0];
//   // console.log("Check this");
//   new google.maps.Marker({
//     position: new google.maps.LatLng(lat, long),
//     map: map,
//     title: title //do we need this Title? //what's the point of this?
//   });
// };



let weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
// var $("info");
let map;

$(document).ready(function() {
  // console.log("Let's get coding!");
  // CODE IN HERE!
  initMap();
  getQuakes();

  function getQuakes(){
    $.ajax({
      method: "GET",
      url: weekly_quakes_endpoint,
      dataType: 'json',
      success: onSuccess
    });


    function onSuccess(responseData){
      // var random = responseData.features[0].properties.title;
      let quakeArray = responseData.features;

      quakeArray.forEach(function(quake){

        let title = quake.properties.title;

        // $("#info").append(`<p> ${quake.properties.title}</p>`);
        let hoursAgo = Math.round((Date.now() - quake.properties.time) / (1000 * 60 * 60));
        $("#info").append("<p>" + title + " / " + hoursAgo + " hours ago</p");

        let lat = quake.geometry.coordinates[1];
        let lng = quake.geometry.coordinates[0];

        // function markPoints(){
        new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map,
          title: title
        });
      });
    }
  };
});

function initMap(){
  let map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: 37.7749, lng: -122.4194},
    zoom:8
  });
};
