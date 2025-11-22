//RECURSIVIDADE
function fatorial(n1){
    if(n1 == 1 || n1 == 0){
        return 1;
    }
    else if(n1 < 0){
        return 'Não existe fatorial de número negativo'
    }
    else{
        return n1 * fatorial(n1-1)
    }
}
console.log(fatorial(50))
