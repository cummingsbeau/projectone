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

$('#zipsubmit').click(function() {
  event.preventDefault();

  zip = $('#zipinput').val();
  console.log(zip);
});

var apiKey = 'AIzaSyBRjrg9AAPsYYExgfenyhrdUp_szEucXZ4';

<<<<<<< HEAD
function initMap() {
  // The location of Phoenix
  var Phoenix = {lat: 33.4484, lng: -112.0740};
  // The map, centered at Phoenix
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: Phoenix});
  // The marker, positioned at Phoenix
  var marker = new google.maps.Marker({position: Phoenix, map: map});
};

var APIKey = "166a433c57516f51dfab1f7edaed8413";
var submitZip="85020";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip="+submitZip+",us&units=imperial&appid="+ APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(queryURL);
        console.log(response);
        console.log(response.list[0].main.temp_max)
        $(".cityName").text("Temperature (F) " + response.list[0].main.temp);
        $(".cityName").text("Maximum Temperature (F) " + response.list[0].main.temp_max);
        $(".cityName").text("Minimum Temperature (F) " + response.list[0].main.temp_min);
        $(".cityName").text("Weather:" + response.list[0].weather.description);
        // console.log(response.main.temp);
      });
=======
queryURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.4484,-112.0740&radius=1500&keyword=dog+park&key=' + apiKey;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
  $('#map').append(response.results[0].name);
});


>>>>>>> 7253e2840409bb1d61ee14900d066e08df913a56
>>>>>>> d7c031fbe5477b792030b6cf346eac5dc1d24b3a
