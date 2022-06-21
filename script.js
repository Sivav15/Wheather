document.getElementsByClassName("button")[0].addEventListener("click", () => {
  let input_value = document.getElementsByClassName("inputbox")[0].value;
  console.log(input_value);
  showweather(input_value);
});
function showweather(value) {
  function weather() {
    return new Promise((resolve, reject) => {
      let url = `https://api.weatherapi.com/v1/current.json?key=f4caa850f3ae41abbc9135031221606&q=${value}&aqi=no`;
      fetch(url)
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  weather()
    .then((data) => data.json())
    .then((data1) => {
      console.log(data1);
      document.getElementsByClassName("deg")[0].innerHTML = `${data1.current.temp_c}<span id = "siz" ><sup>o</sup>C</span>`;
      document.getElementsByClassName("coun")[0].innerHTML = data1.location.country;
      document.getElementsByClassName("time")[0].innerHTML = data1.location.localtime;
      document.getElementsByClassName("head")[0].innerHTML = `Region : ${data1.location.region}`;
      document.getElementsByClassName("head")[1].innerHTML = `cloud :  ${data1.current.cloud}`;
      document.getElementsByClassName("head")[2].innerHTML = `latitude : ${data1.location.lat}`;
      document.getElementsByClassName("head")[3].innerHTML = ` longitude : ${data1.location.lon}`;
      document.getElementsByClassName("head")[4].innerHTML = `Humidity : ${data1.current.humidity}`;
      document.getElementsByClassName("head")[5].innerHTML = `Fahrenheit : ${data1.current.temp_f}`;
    })
    .catch((err) => console.log(err));
}
let input_value = document.getElementsByClassName("inputbox")[0].value;
console.log(input_value);
showweather(input_value);
