// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  $.ajax({
    method: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",
    dataType: 'json',
    success: onSuccess

  });

  //
  // $('#map').append(function onSuccess(responseData)){
  //   return responseData;
  // })
});



function onSuccess(responseData){
  console.log("TEST", responseData);
  var random = responseData.features[0].properties.title;
  console.log("TEST 2", responseData.features[0].properties.title);
  $('#info').append(random);
}
