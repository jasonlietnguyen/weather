function WeatherController() {

  var weatherService = new WeatherService();

  // this.getCity = function (zip) {
  //   weatherService.getCity(zip)
  //     .then(function (data) {
  //       draw(data);
  //       return weatherService.getWeather(zip)
  //     })
  //     .then(function (data) {
  //       drawW(data);
  //     })
  //     .catch(function (error) {
  //       console.log('Caught: ', error);
  //     });
  // }

  this.getCity = function (e) {
    e.preventDefault();
    var form = e.target;
    weatherService.getCity(form.zip.value)
      .then(function (data) {
        draw(data)
        return weatherService.getWeather(form.zip.value);
      })
      .then(function (data) {
        drawW(data);
      })
      .catch(function (noWeather) {
      });
  }

  function draw(data) {
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
    initMap(data)
    var template = ''
    var elem = document.getElementById("weathercontainer")
    template += `
      <h1>${Math.round(data.main.temp)} F</h1>
      <h1>${data.weather[0].description}</h1>
        `
    return elem.innerHTML = template
  }

  this.initMap = function (data) {
    initMap(data)
  }
  function initMap(data) {
    var uluru = { lat: data.coord.lat, lng: data.coord.lon };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  // function failed() {
  //   var elem = document.getElementById("errors")
  //   elem.innerHTML = ""
  // }




}