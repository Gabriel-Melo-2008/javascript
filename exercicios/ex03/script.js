function carregar(){
    var div = document.getElementsByClassName('texto')[0]

    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    var inum = Number(inicio)
    var fnum = Number(fim)
    var pnum = Number(passo)
    var text = ''

    if(inicio == '' || fim == '' || passo == ''){
        text = 'Impossivel contar'
    }
   
    else{
        if (pnum == 0 && inum != 0 && fnum != 0){
        window.alert('Passo invalido considerando Passo = 1')
        pnum = 1
    }
        if (inum <= fnum){
            for(c = inum; c <= fnum; c+=pnum){
                text += c + '\u{1f449}'
            }
        }
        else if(inum > fnum){
            for(c = inum; c > fnum; c += pnum){
                text += c + '\u{1f449}'
            }
        }
        else{
            text = 'não é possivel realizar esta conta'
        }
    }
    div.innerText = text + '\u{1f3c1}'
}