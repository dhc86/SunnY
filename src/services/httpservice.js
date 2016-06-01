var Fetch = require('whatwg-fetch');

//you will change this when your page goes live!
//var baseUrl = "http://localhost:6069";
var baseUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
var apiKey = "&mode=json&appid=75e2de50ae096a00f7f24dca80c5e9ff";

var service = {
  // when we get the get function it is going to retun a promise
  //fetch inmidiately returns a promise, "some type of function that it will be called later"
  //then will be called when process is completed and return back json object!
  get: function(city){
    return fetch(baseUrl + city + apiKey)
    .then(function(response){
      //console.log("data from httpservice: ",response);
      return response.json();
    });
  }
  //if we are doing more than get we can put a post,delete, put request
}

module.exports = service;
