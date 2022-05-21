const logica1 = 2;
const logica2 = 4;
const logica3 = true;
const logica4 = false;
const logica5 = "Raul";

if(logica5 === "Raul"){
    console.log("entrou no if 1: logica5 === 'Raul'")
}
if(logica5){
    console.log("entrou no if 2: logica5")
}
if(logica3){
    console.log("entrou no if 3: logica3")
}
if(logica1 !== logica2){
    console.log("entrou no if 4: logica1 !== logica2")
}
if(logica4){
    console.log("entrou no if 5: logica4")
}
if(!logica4){
    console.log("entrou no if 6: !logica4")
}
if(0){
    console.log("entrou no if 0: 0")
}

console.log("!3", !3)
console.log("!!3", !!3)

switch("jorje"){
    case "Raul": 
        console.log("caiu no case 'Raul'");
        break;    
    case "Bruno":
    case "Henrique":
        console.log("caiu no case 'bruno' ou 'henrique'");
        break; 
    default:
        console.log("execução padrão");
        break;
}