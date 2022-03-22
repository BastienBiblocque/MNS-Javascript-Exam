let buttonAdd = document.querySelector('#buttonAdd');
let buttonHome = document.querySelector('#buttonHome');
buttonAdd.addEventListener('click',()=>{navigateTo('/add')});
buttonHome.addEventListener('click',()=>{navigateTo('/')});

function navigateTo(url){
    window.location = url;
}

//navigation de base