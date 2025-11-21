let light = document.body.classList.toggle('light-mode');
let dark = false;
fetch("includes/menu.html")
    .then(response=>response.text())
    .then(data => {
        document.getElementById('menu-container').innerHTML = data;
    });

document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        toggleDark();
    }
});

function toggleLight(){
    if(dark){
        light = document.body.classList.toggle('light-mode');
        dark = document.body.classList.toggle('dark-mode');
    }
    localStorage.setItem('darkMode', dark ? 'enabled' : 'disabled');
}

function toggleDark(){
    if(light){
        light = document.body.classList.toggle('light-mode');
        dark = document.body.classList.toggle('dark-mode');
    }
    localStorage.setItem('darkMode', dark ? 'enabled' : 'disabled');
}

