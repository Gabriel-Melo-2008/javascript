let amigo = {
    nome :'José', 
    sexo:'M', 
    peso:84.5, 
    engordar(p=0){
        this.nome += p
    }}
amigo.engordar(2)
console.log(amigo.nome)