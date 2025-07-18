function gerarTabuada(){
    var numero = document.getElementById('numero').value;
    var select = document.getElementsByTagName('select')[0];
    
    if (numero == '') {
        window.alert('Por favor, digite um número!');
    } 
    else{
        var num = Number(numero);
        select.innerHTML = ''; // Limpa as opções anteriores
        for(i = 1; i <=10; i++){
            let option = document.createElement('option');
            option.value = `tab${i}`;
            option.text = `${num} x ${i} = ${num * i}`
            select.appendChild(option);
        }
    }
}