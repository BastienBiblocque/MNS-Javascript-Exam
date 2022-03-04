function deleted () {
    let options = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
    };

    let url = 'delete/3'

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