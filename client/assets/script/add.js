let inputName = document.querySelector('#inputName');
let buttonSendForm = document.querySelector('#buttonSendForm');

buttonSendForm.addEventListener('click',post);

function post () {
    let tmp = {
        name: inputName.value,
        pays: 'UK',
        id: Date.now().toString(),
    };

    let options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(tmp)
    };

    let url = 'data'

    fetch(url, options)
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
        })
        .then((response) => {
            console.log(response);
        })
}