// Initialize Firebase
var config = {
  apiKey: "AIzaSyBU1EMgzBxJD5sxWe0T5iIaBQVh3TysXEg",
  authDomain: "projectone-6b0f1.firebaseapp.com",
  databaseURL: "https://projectone-6b0f1.firebaseio.com",
  projectId: "projectone-6b0f1",
  storageBucket: "",
  messagingSenderId: "872777787634"
};
firebase.initializeApp(config);

var zip;
var apiKey = 'AIzaSyBRjrg9AAPsYYExgfenyhrdUp_szEucXZ4';

$('#zipsubmit').click(function () {
  event.preventDefault();

  zip = $('#zipinput').val();
  var geoURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + '&key=' + apiKey;
  var lat;
  var lng;
  var latlng;

  $.ajax({
    url: geoURL,
    method: "GET"
  }).then(function (response) {
    lat = response.results[0].geometry.location.lat;
    lng = response.results[0].geometry.location.lng;

    latlng = lat + "," + lng;

    var queryURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latlng + '&radius=1500&keyword=dog+park&key=' + apiKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      if (response.status == "ZERO_RESULTS") {
        $('#parks').html('NO PARKS IN YOUR AREA');
      }
      else {

        for (var i = 0; i < response.results.length; i++) {
          var photo = response.results[i].photos[0].html_attributions[0];
          $('#parks').append(photo + response.results[i].name + '<br>' + '<br>');
        }
      }
      console.log(response);
    });
  });
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
// var submitZip = $('#zipinput').val();
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",us&units=imperial&appid=" + APIKey;

$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function (response) {
    console.log(queryURL);
    console.log(response);
    console.log(response.list[0].main.temp_max)
    $("#weather").append("Temperature (F): " + response.list[0].main.temp+"</br>");
    $("#weather").append("Maximum Temperature (F): " + response.list[0].main.temp_max+"</br>");
    $("#weather").append("Minimum Temperature (F): " + response.list[0].main.temp_min+"</br>");
    $("#weather").append("Weather: " + response.list[0].weather[0].description+"</br>");
    console.log(queryURL);
    // console.log(response.main.temp);
  });
});

// var APIKey = "166a433c57516f51dfab1f7edaed8413";
// var submitZip = $('#zipinput').val();
// var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",us&units=imperial&appid=" + APIKey;

// $.ajax({
//   url: queryURL,
//   method: "GET"
// })
//   .then(function (response) {
//     console.log(queryURL);
//     console.log(response);
//     console.log(response.list[0].main.temp_max)
//     $(".cityName").text("Temperature (F) " + response.list[0].main.temp);
//     $(".cityName").text("Maximum Temperature (F) " + response.list[0].main.temp_max);
//     $(".cityName").text("Minimum Temperature (F) " + response.list[0].main.temp_min);
//     $(".cityName").text("Weather:" + response.list[0].weather.description);
//     // console.log(response.main.temp);
//   });

