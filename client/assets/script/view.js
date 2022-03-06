let idToShow = localStorage.getItem('idToShow');
let nameDisplay = document.querySelector('#nameDisplay')
let countryDisplay = document.querySelector('#countryDisplay')
let url = `/data/${idToShow}`;
let options = {
    method: 'get'
}

console.log(idToShow)


fetch(url, options)
    .then((res) => {
        if(res.ok) {
            return res.json();
        }
    })
    .then((response) => {
        nameDisplay.innerText = response.name;
        countryDisplay.innerText = response.pays;
    })

