let city_input = document.querySelector("#search-box");
 
    let today_main = `https://api.openweathermap.org/data/2.5/weather?q=`
    let apikey = `&appid=64e9138c1522750f0d3147502cd153c0&units=metric`;

let  city1 = document.querySelector("#city1");
let  city2 = document.querySelector("#city2");
let  city3 = document.querySelector("#city3");
let cityAfterSearch = document.querySelector("#aftersearch-city");
let curr_temp1 = document.querySelector("#curr_temperature1");
let curr_temp2 = document.querySelector("#curr_temperature2");
let curr_temp3 = document.querySelector("#curr_temperature3");
let curr_tempAfterSearch = document.querySelector("#curr_temperatureAfterSearch");

// let tomorow_url = `https://api.openweathermap.org/data/2.5/forecast?q==${city_input.value}&appid=64e9138c1522750f0d3147502cd153c0&units=metric`;

let btn = document.querySelector("#search-icon");

btn.addEventListener("click", async()=>{
    console.log("hi clicked");
    let city = city_input.value;
     let temp = await getweather(city);
     cityAfterSearch.innerText = city.charAt(0).toUpperCase()+city.slice(1);
    curr_tempAfterSearch.innerText = temp;
    
})

getweather = async (city)=>{
    let b = await fetch(today_main + city + apikey)
   let c = await b.json();
    // console.log(c);
    // console.log(c.main)
    // console.log(c.main.temp)
    return c.main.temp;
}

 // first time showing data starts here
firsttimeShowing ()
 async function firsttimeShowing (){
            let res1 =  await fetch(today_main + city1.innerText + apikey)
            let data1 = await res1.json();
           
            let res2 = await fetch(today_main + city2.innerText + apikey)
            let data2 = await res2.json();
            
            let res3 = await fetch(today_main + city3.innerText + apikey)
            let data3 = await res3.json();

            curr_temp1.innerText = `${data1.main.temp}°C`;
            curr_temp2.innerText = `${data2.main.temp}°C`;
            curr_temp3.innerText = `${data3.main.temp}°C`;
        
 }
    // First time showing data ends 

//repeteadly showing data starts here in interval of 100000 ms
     setInterval(async ()=>{

            let res1 =  await fetch(today_main + city1.innerText + apikey)
            let data1 = await res1.json();
        
            let res2 = await fetch(today_main + city2.innerText + apikey)
            let data2 = await res2.json();
        
            let res3 = await fetch(today_main + city3.innerText + apikey)
            let data3 = await res3.json();
        
            curr_temp1.innerText = `${data1.main.temp}°C`;
            curr_temp2.innerText = `${data2.main.temp}°C`;
            curr_temp3.innerText = `${data3.main.temp}°C`;
},100000);

