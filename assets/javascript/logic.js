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

var apiKey = 'AIzaSyBRjrg9AAPsYYExgfenyhrdUp_szEucXZ4';

function initMap() {
  // The location of Phoenix
  var Phoenix = {lat: 33.4484, lng: -112.0740};
  // The map, centered at Phoenix
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: Phoenix});
  // The marker, positioned at Phoenix
  var marker = new google.maps.Marker({position: Phoenix, map: map});
};


queryURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.4484,-112.0740&radius=1500&keyword=dog+park&key=' + apiKey;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
  $('#map').append(response.results[0].name);
});

