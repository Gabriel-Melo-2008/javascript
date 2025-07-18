function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    var corpo = document.body
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >=0 && hora < 12){
        img.src = 'imgs/fotomanha.png'
        corpo.style.backgroundColor = '#e7ff9a'
    }
    else if(hora >= 12 && hora < 18){
        img.src = 'imgs/fototarde.png'
        corpo.style.backgroundColor = '#76293e'
    }
    else{
        img.src = 'imgs/fotonoite.png'
        corpo.style.backgroundColor = '#4c3985'
    }
}