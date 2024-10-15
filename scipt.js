let apiUrl=
"https://api.openweathermap.org/data/2.5/weather?units=metric&appid=eb8e7f9c13dac334ce0adb8b7a1aa733"
async function checkWeather() {
  let city = document.querySelector(".input1").value;
  const response = await fetch(apiUrl + `&q=${city}`);
  weatherIcon = document.querySelector(".img");

  var res = await response; 
  console.log(res);
  if (res.status == 404) {
    weatherIcon.src = "404.png";
    document.querySelector(".city").innerHTML = "Invalid City";
    document.querySelector(".loc").style.display = "none";
    document.querySelector(".details").style.display = "none";
    document.querySelector(".temp").style.display = "none";
  }

  var data = await response.json();

  console.log(data);
  console.log(data.cod + " cod");

  place = data.name;
  document.querySelector(".city").innerHTML = place.toUpperCase();
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
  document.querySelector(".hum-per").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-per").innerHTML =
    Math.round(data.wind.speed) + "km/h";

  // document.querySelector(".location-icon").style.display = "";
  document.querySelector(".details").style.display = "flex";
  document.querySelector(".temp").style.display = "";

  weather = data.weather[0].main;
  document.querySelector(".weather").innerHTML = weather;
  console.log(weather);

  if (weather == "Clouds") {
    weatherIcon.src = "clouds.png";
  }
  if (weather == "Rain") {
    weatherIcon.src = "rain.png";
  }
  if (weather == "Snow") {
    weatherIcon.src = "snow.png";
  }
  if (weather == "Clear") {
    weatherIcon.src = "clear.png";
  }
}
document.querySelector(".search").addEventListener("click", () => {
  checkWeather();
});