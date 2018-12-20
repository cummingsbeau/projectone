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