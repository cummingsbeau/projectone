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
