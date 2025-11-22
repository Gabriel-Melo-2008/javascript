let msg = document.getElementById('msg')
let lista = []
function aperte(){
    let numero = document.getElementById('num')
    let input = numero.value
    let num = Number(input)
    let select = document.getElementById('select')
    if(input == '' || lista.includes(num) || num < 1 || num > 100){
            window.alert('Valor invalido ou já encontrado na lista')
        }

    else{
        let option = document.createElement('option')
        lista.push(num)
        option.text = `Valor ${num} adicionado`
        select.appendChild(option)
        console.log(lista)
        msg.innerHTML = ''
        }
       numero.value = ''
       numero.focus()
    }

function finalizar(){
    if(lista.length == 0){
        window.alert('Adicione Valores antes de finalizar')
    }

    else{
        let cont = lista.length
        let lista_ordem = lista.sort()
        let mvalor = lista_ordem[0]
        let Mvalor = lista_ordem[cont-1]
        let soma = 0

        for(let i = 0; i < cont; i++){
            soma += lista[i]
        }

        let media = soma/cont
        msg.innerHTML = `Ao todo temos ${cont} números cadastrados. <br> <br> 
                        O maior valor informado foi ${Mvalor}. <br>  <br>
                        O menor valor informado foi ${mvalor}. <br>  <br>
                        Somando todos os valores, temos ${soma}. <br>  <br>
                        A média dos valores digitados é ${media}.`
    }
}