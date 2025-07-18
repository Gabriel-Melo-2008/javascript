function teste(){
    var div = document.getElementById('div')
    var h1 = document.createElement("h1")
    h1.textContent = 'Oii'

    div.appendChild(h1)
}

function clicar() {     
const checkbox = document.getElementsByTagName('input')[0];

    if (checkbox.checked) {
        document.body.style.background = '#342741';
        document.body.style.color = 'white';
        
    } else {
        document.body.style.background = 'white';
        document.body.style.color = 'black';
    }
};