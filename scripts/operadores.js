var variavel1 = 1;
let variavel2 = "2";
const variavel3 = true;
let variavel4 = {};
let variavel5 = [];

// TIPOS DE VARIAVEIS
// number - ser um numero
// string - ser um texto entre aspas
// boolean - ser true ou false
// object - precisa estar entre chaves {}
// array - estar entre colchetes []

console.log("number: ", typeof variavel1)
console.log("string: ", typeof variavel2)
console.log("boolean: ", typeof variavel3)
console.log("object: ", typeof variavel4)
console.log("array: ", typeof variavel5, Array.isArray(variavel5))

// OPERADORES MATEMATICOS

console.log("10+10", 10+10)
console.log("20-10", 20-10)
console.log("20*2", 20*2)
console.log("30/2", 30/2)
console.log("7%2", 7%2, 7/2)

// OPERADORES LOGICOS

// > maior que
// >= maior igual a
// < menor que
// <= menor igual a
// ! negação 
// == igual a
// === igual a comparando o tipo e referencia da memoria


// UTILIZAÇÃO DE OBJETO

const objeto1 = {
    nome: "Raul",
    sobrenome:"Schmitz",
    idade: 15,
    cidade: {
        nome: "Guaramirim",
        estado: {
            nome: "Santa Catarina",
            sigla: "SC"
        }
    }
};

console.log("objeto:", objeto1)
console.log("objeto.nome:", objeto1.nome)

objeto1.nome = "Bruno"
objeto1.cordocabelo = "castanho"

delete objeto1.sobrenome

console.log("objeto modificado:", objeto1)
console.log("objeto.nome:", objeto1.nome)
console.log("objeto.cidade.estado.nome:", objeto1.cidade.estado.nome)

// UTILIZAÇÃO DE ARRAY

const lista = [];

lista.push("oi",1)
lista.push(true, {a:1}, [objeto1])

console.log("lista", lista)
console.log("lista[3]", lista[3])

lista.splice(1,2)

console.log("lista.splice", lista)

const listaPessoas = [
    {
        nome: "Bruno",
        sobrenome: "Henrique"
    },
    {
        nome: "Raul",
        sobrenome: "Schmitz"
    },
    {
        nome: "Vanderlei",
        sobrenome: "Schmitz"
    },
    {
        nome: "Clarita",
        sobrenome: "Engel Schmitz"
    },
];

listaPessoas.forEach((element, index) => {
    console.log("forEach.element:", index, element)
})

const listaNomes = listaPessoas.map(element => {
    return element.nome + " " + element.sobrenome
});

console.log("listaNomes:", listaNomes)