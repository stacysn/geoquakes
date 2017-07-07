// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  $.ajax({
    method: "GET",
    url: "https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=2017-06-30%2000:00:00&endtime=2017-07-07%2023:59:59&minmagnitude=2.5&orderby=time",
    dataType: 'json',
    success: onSuccess

  });

  //
  // $('#map').append(function onSuccess(responseData)){
  //   return responseData;
  // })
});



function onSuccess(responseData){
  // var random = responseData.features[0].properties.title;

  var quakeArray = responseData.features;
  quakeArray.forEach(function(quake){
    console.log(quake.properties.title);
    $("#info").append(`<p> ${quake.properties.title}</p>`);
    // console.log("print me");
    // console.log("TESTTTTTTTT");
  })
  // console.log("TEST 2", responseData.features[0].properties.title);
  // $('#info').append(random);
  // console.log("HIII");
}
