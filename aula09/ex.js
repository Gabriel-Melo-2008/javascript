/*
let num = [5, 8, 2 , 9, 3];
num[2]=6
console.log(`Nosso array é ${num}`);
*/
//--------------------------------------------------------------------------------------------------\\
/*
let num = [5, 8, 2 , 9, 3];
num.push(1);
num.sort(); 
console.log(`Nosso array é ${num}`);
console.log(`Nosso array tem ${num.length} elementos`);
console.log(`O primeiro valor do array é ${num[0]}`);
*/
//--------------------------------------------------------------------------------------------------\\
/*
let num = [5, 8, 2 , 9, 3];
for(let i = 0; i<num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/
//--------------------------------------------------------------------------------------------------\\
/*
let num = [5, 8, 2 , 9, 3];
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
//--------------------------------------------------------------------------------------------------\\
let num = [5, 8, 2 , 9, 3];
num.push(1);
num.sort(); 
let pos = num.indexOf(5)
if(pos == -1){
    console.log('Valor não encontrado')
}
else{
console.log(`O valor está na posição ${pos}`);}
//--------------------------------------------------------------------------------------------------\\

