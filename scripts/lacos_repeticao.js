for(let i = 0; i <= 10; i++){
    console.log("for 1:", i);
}

let execucao = true;
let contador = 0;
while(execucao){
    contador++;
    console.log("while 1:", contador);
    if(contador == 3){
        execucao = false;
    }
}

console.log("execução:", execucao)
while(execucao){
    console.log("while 2:", execucao)
}

do{
    console.log("do while:", execucao)
} while(execucao)

const objetoForIn = {
    nome: "Raul",
    sobrenome: "Schmitz"
}

for (const key in objetoForIn) {
    console.log("for in:", key, objetoForIn[key])
}