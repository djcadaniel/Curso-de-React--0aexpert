const name = 'daniel';
const lastname  = 'castro';
// `` se llmana backtincs
const nameComplete = `${name} ${lastname} ${1 + 1}`;
console.log(nameComplete);

function getSaludo(name){
    return 'hola hack ' + name
}

console.log(`Este es un texto: ${getSaludo(nameComplete)}`)