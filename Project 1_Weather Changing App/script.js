// api we are using: https://api.openweathermap.org/data/2.5/weather?q=nepal&appid=cab9d96ff98e028e9be705fc092cb308


const search_box = document.querySelector(".search_box>input");
const search_btn = document.querySelector(".search_box>button");
const tooltip = document.querySelector(".error_bar");



function getWeather(city) {

    console.log(city)
    const API_KEY = "cab9d96ff98e028e9be705fc092cb308";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cab9d96ff98e028e9be705fc092cb308&units=metric`)
        .then((data) => {
            if (data.ok) {
                console.log(`Data recived with OK`)
                return data.json();
            }
            else {
                tooltip.style.display = "block";
                console.log("Inside Else: Error Occured when fetching.!! Status Code:" + data.status)
                return new Error("Error Occured when fetching.!! Status Code:" + data.status)
            }
        })
        .then(setWeather)
        .catch(console.log(" Inside catch: Error Occured when fetching.!! Status Code:" + data.status))
}

function setWeather(data) {
    let temperature = data.main.temp
    // temperature = ((temperature-32)*5)/9;
    let humidity = data.main.humidity
    let wind_speed = data.wind.speed
    let country = data.name

    document.querySelector(".temperature").innerHTML = `${temperature}&#176;c`
    document.querySelector(".humidity").innerHTML = `${humidity}%`
    document.querySelector(".wind_speed").innerHTML = `${wind_speed}km/h`
    document.querySelector(".country").innerHTML = country
}



search_btn.addEventListener("click",()=>{
    tooltip.style.display = "none";
    getWeather(search_box.value)
})


// .then(data =>{console.log(data); return data})

