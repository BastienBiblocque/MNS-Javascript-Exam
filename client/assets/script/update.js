let inputName = document.querySelector('#inputName');
let inputPays = document.querySelector('#inputPays');

let buttonSendForm = document.querySelector('#buttonSendForm');
let alert_banner = document.querySelector('#alert_banner');

buttonSendForm.addEventListener('click',update);


let idToUpdate = localStorage.getItem('idToUpdate');
let url = `/data/${idToUpdate}`;
let options = {
    method: 'get'
}


fetch(url, options)
    .then((res) => {
        if(res.ok) {
            return res.json();
        }
    })
    .then((response) => {
        inputName.value = response.name;
        inputPays.value = response.pays;
    })



//on patch notre item avec la méthode PUT
function update () {
    console.log(inputPays.value);
    let tmp = {
        name: inputName.value,
        pays: inputPays.value,
        id: Date.now().toString(),
    };

    let options = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(tmp)
    };


    fetch(url, options)
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
        })
        .then((response) => {
            alert_banner.classList.remove('hidden');
            setTimeout(()=>{
                alert_banner.classList.add('hidden');
            }, 2000);
        })
}