let light = document.body.classList.toggle('light-mode');
let dark = false;
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

