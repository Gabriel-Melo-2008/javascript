/*const { createElement } = require("react")*/

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var resposta = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        resposta.innerText = "Digite um ano valido"
    }
    else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', "foto")

        if(fsex[0].checked){
            genero = 'masculino'
            if (idade >=0 && idade < 10){
                imagem.setAttribute('src','imgs/fotomenino.png')
            }  
            
            else if (idade < 20){
                imagem.setAttribute('src','imgs/fotohomemjovem.png')
            }

            else if (idade < 60){
                imagem.setAttribute('src','imgs/fotohomem.png')
  
            }
            else{
                imagem.setAttribute('src','imgs/fotoidoso.png')

            }
        }
        else if(fsex[1].checked){
            genero = 'femenino'
            if (idade >=0 && idade < 10){
                imagem.setAttribute('src','imgs/fotomenina.png')
            }  
            
            else if (idade < 20){
                imagem.setAttribute('src','imgs/fotomulherjovem.png')
            }

            else if (idade < 60){
                imagem.setAttribute('src','imgs/fotomulher.png')
  
            }
            else{
                imagem.setAttribute('src','imgs/fotoidosa.png')

            }
        }
    resposta.style.textAlign = 'center'
    resposta.innerText = `Seu genero é ${genero} e sua idade é ${idade}`
    resposta.appendChild(imagem)
    }
}