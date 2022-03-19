let inputName = document.querySelector('#inputName');
let inputPays = document.querySelector('#inputPays');
let buttonSendForm = document.querySelector('#buttonSendForm');
let alert_banner = document.querySelector('#alert_banner');

buttonSendForm.addEventListener('click',post);

function post () {
    if (inputName.value.length === 0 ){
        inputName.classList.add('border-red-600');
    } else {
        inputName.classList.remove('border-red-600');
        let tmp = {
            name: inputName.value,
            pays: inputPays.value,
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
                alert_banner.classList.remove('hidden');
                setTimeout(()=>{
                    alert_banner.classList.add('hidden');
                }, 2000);
            })
    }

}