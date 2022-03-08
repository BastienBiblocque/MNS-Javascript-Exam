let inputName = document.querySelector('#inputName');
let buttonSendForm = document.querySelector('#buttonSendForm');
let alert_banner = document.querySelector('#alert_banner');

buttonSendForm.addEventListener('click',update);


let idToUpdate = localStorage.getItem('idToUpdate');
let url = `/data/${idToUpdate}`;
let options = {
    method: 'get'
}

console.log(idToUpdate);


fetch(url, options)
    .then((res) => {
        if(res.ok) {
            return res.json();
        }
    })
    .then((response) => {
        console.log(response);
        inputName.value = response.name;
    })




function update () {
    let tmp = {
        name: inputName.value,
        pays: 'UK',
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