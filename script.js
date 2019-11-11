//Array which contains the cities weather details
const cities = [
    {city:'Bangalore',state:',Karnataka ',degree :23,weather:'Cloudy'},
    {city:'Gr.Noida',state:',Uttar Pradesh',degree :26,weather:'Thunder'},
    {city:'Patna',state:',Bihar',degree :30,weather:'Humid'},
    {city:'Gurgaon',state:',Haryana',degree :34,weather:'Sunny'},
    {city:'Mumbai',state:',Maharashtra',degree :20,weather:'Rainy'},
    {city:'Ranchi',state:',Jharkhand',degree :21,weather:'Drizzle'},
    {city:'Jaipur',state:',Rajasthan',degree :32,weather:'Sunny'}
];

// function where updation from user selection is taking place
// function changeCity(){
//     let value=document.getElementById('in').value;
//     cities.filter(arr=>{
//         if(arr.city===value){
//             document.getElementsByClassName("city")[0].innerHTML = arr.city;
//             document.getElementsByClassName("state")[0].innerHTML = arr.state;
//             document.getElementsByClassName("weather")[0].innerHTML = arr.weather;
//             document.getElementsByClassName("temp")[0].innerHTML = arr.degree;
//         }
//     } );  

// }
const dayarr=["Sunday","Monday","Tuesday","WednesDay","Thursday","Friday","Saturday"];
let currentDay= new Date();
document.getElementById("day").innerHTML= dayarr[currentDay.getDay()];
document.getElementById("time").innerHTML=currentDay.getHours()+":"+currentDay.getMinutes();
// below is the code for degree conversion from celsius to farenheit and vice versa 
let temperature = 23;
let celsius = temperature;
let farenheit;
let celsiusCount = 0;

function changeToFarenheit(){
  document.getElementsByClassName("F")[0].style.color="#1890f0";
  document.getElementsByClassName("C")[0].style.color="#000000";
    if(celsiusCount < 1){
        farenheit = Math.round(celsius*1.8+32);
        temperature = farenheit;
        celsiusCount++;
    }
  document.getElementsByClassName("temp")[0].innerHTML = farenheit;
}

function changeToCelsius(){
    document.getElementsByClassName("C")[0].style.color="#1890f0";
    document.getElementsByClassName("F")[0].style.color="#000000";
    temperature = celsius;
    celsiusCount--;
    document.getElementsByClassName("temp")[0].innerHTML = celsius;
}


function weatherBalloon( ) {
  var name=document.getElementById('in').value;
  var key = 'c304788eab16c16fd912d14d982bbf9a';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +name+ '&appid=' +key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
      console.log(data.weather[0].main);
      document.getElementById("city").innerHTML = data.name;
      document.getElementById("state").innerHTML = data.sys.country;
      document.getElementById("weather").innerHTML = data.weather[0].main;
      let tempInC=Math.round(data.main.temp)-273;
      document.getElementsByClassName("temp")[0].innerHTML =tempInC;

  })
  .catch(function() {
    // catch any errors
  });
}


// END 