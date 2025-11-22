function fatorial(n1){
    let f = 1
    for(let i = 1; i <= n1; i++ ){
        f *= i
    }
    return f
}
console.log(fatorial(0))
