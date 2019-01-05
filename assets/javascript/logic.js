// Initialize Firebase
var config = {
<<<<<<< HEAD
    apiKey: "AIzaSyBU1EMgzBxJD5sxWe0T5iIaBQVh3TysXEg",
    authDomain: "projectone-6b0f1.firebaseapp.com",
    databaseURL: "https://projectone-6b0f1.firebaseio.com",
    projectId: "projectone-6b0f1",
    storageBucket: "",
    messagingSenderId: "872777787634"
  };
  firebase.initializeApp(config);
//latLon= latatude,longitude. i put it into a variable so we could pull it from the .location feature// 
  var queryURL = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=AdlWTUtuEueaGzMp3Zzqa1y4BkNNtDGV"
  +locationKey;

  // We then created an AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $(".key").var ="locationKey";
    console.log(".key");
  });
=======
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
        alert("No parks");
      }
      console.log(response);
    });
  });
});


<<<<<<< HEAD
>>>>>>> 7253e2840409bb1d61ee14900d066e08df913a56
>>>>>>> d7c031fbe5477b792030b6cf346eac5dc1d24b3a
=======



>>>>>>> 7cf933f236bdf8fa3effa6fc31c0cdfd6709f0aa
