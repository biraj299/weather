let city_input = document.querySelector("#search-box");
 
    let today_main = `https://api.openweathermap.org/data/2.5/weather?q=`
    let apikey = `&appid=64e9138c1522750f0d3147502cd153c0&units=metric`;

let display_city = document.querySelector("#first-city");
let celius = document.querySelector("#first-temp");
// let tomorow_url = `https://api.openweathermap.org/data/2.5/forecast?q==${city_input.value}&appid=64e9138c1522750f0d3147502cd153c0&units=metric`;

let btn = document.querySelector("#search-icon");

btn.addEventListener("click", async()=>{
    console.log("hi clicked");
    let city = city_input.value;
     let temp = await getweather(city);
     display_city.innerText = city;

    celius.innerText = temp;
    
})

getweather = async (city)=>{
    let b = await fetch(today_main + city + apikey)
   let c = await b.json();
    // console.log(c);
    // console.log(c.main)
    // console.log(c.main.temp)
    return c.main.temp;
}