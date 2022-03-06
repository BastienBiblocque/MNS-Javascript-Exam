const myHeaders = new Headers();
let loader = document.querySelector('#loader');

let input = document.querySelector('#searchInput');
let displayDegree = document.querySelector('#displayDegree');
input.addEventListener("change",()=>{change()});

let currentLocation = document.querySelector('#currentLocation');
currentLocation.addEventListener("click",()=>{getCurrentWeather()});

function change(){
    loader.style.display = 'block';
    displayDegree.style.display = 'none';
    doSearchCity(input.value)
}

function getCurrentWeather(){
    loader.style.display = 'block';
    displayDegree.style.display = 'none';
    navigator.geolocation.getCurrentPosition(function(position) {
        doSearchWeather(position.coords.latitude, position.coords.longitude);
    });
}



function doSearchCity(name){
    fetch(`https://api-adresse.data.gouv.fr/search/?q=${name}`, {
        method: "GET",
        mode:"cors",
        headers: myHeaders,
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            doSearchWeather(data.features[0].geometry.coordinates[1],data.features[0].geometry.coordinates[0])
        })
        .catch(err => {
            console.error(err);
        });
}

function doSearchWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=97286d65d445e76a11d157f733681e46&units=metric`, {
        method: "GET",
        mode:"cors",
        headers: myHeaders,
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            displayDate(data)
        })
        .catch(err => {
            console.error(err);
        });
}

function displayDate(data){
    loader.style.display = 'none';
    displayDegree.style.display = 'block';
    displayDegree.innerHTML = `Il fait ${data.main.temp} degrès`;

}





