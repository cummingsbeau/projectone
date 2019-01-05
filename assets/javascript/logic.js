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

// Global vars 
var zip;
var apiKey = 'AIzaSyBRjrg9AAPsYYExgfenyhrdUp_szEucXZ4';

// Click function for when user submits zip
$('#zipsubmit').click(function () {

  // Prevents form from submitting and clears previous content
  event.preventDefault();
  $('#parks').html("");
  // Pulls the value of the input
  zip = $('#zipinput').val();

  // Vars used in calculations
  var geoURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + '&key=' + apiKey;
  var lat;
  var lng;
  var latlng;

  // API call to the google Geocoding
  $.ajax({
    url: geoURL,
    method: "GET"
  }).then(function (response) {
    lat = response.results[0].geometry.location.lat;
    lng = response.results[0].geometry.location.lng;

    latlng = lat + "," + lng;

    // Var used for the Google Places API
    var queryURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latlng + '&radius=1500&keyword=dog+park&key=' + apiKey;

    // API call to the Places API to find parks within specified zip code
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      // If response comes back with nothing displays to DIV
      if (response.status == "ZERO_RESULTS") {
        $('#parks').html('NO PARKS IN YOUR AREA');
      }
      // Displays response to correct DIV
      else {

        for (var i = 0; i < response.results.length; i++) {
          var address = response.results[i].vicinity;
          
          var parkdiv = $('<div>');
          parkdiv.addClass('parkDisplay');
          parkdiv.append(response.results[i].name + "<br>" + " address: " + address + "<br>" + '<br>');
          $('#parks').append(parkdiv);
        }
      }
    });
  });
});