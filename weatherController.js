function WeatherController() {

  var weatherService = new WeatherService();

  this.getCity = function (zip) {
    weatherService.getCity(zip)
      .then(function (data) {
        draw(data);
        getWeather(zip)
      })
      .catch(function (error) {
        console.log('Caught: ', error);
      });
  }

  function getWeather(data) {
    weatherService.getWeather(data)
      .then(function (data) {
        drawW(data);
      })
      .catch(function (error) {
        console.log('Caught: ', error);
      });
  }


  function draw(data) {
    console.log(data)
    var template = ''
    var elem = document.getElementById("container")
    template += `
      <h1>${data.places[0]["place name"]}</h1>
      <h2>${data.places[0]["state"]}, ${data.country}</h2>
        `
    return elem.innerHTML = template
  }

   function drawW(data) {
    console.log(data)
    var template = ''
    var elem = document.getElementById("weathercontainer")
    template += `
      <h1>${data.main.temp} F</h1>
      <h1>${data.weather[0].description}</h1>
        `
    return elem.innerHTML = template
  }


  // function failed() {
  //   var elem = document.getElementById("errors")
  //   elem.innerHTML = ""
  // }




}