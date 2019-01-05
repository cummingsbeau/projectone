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
});





