//Funções auxiliares

//Função que é passada como callback da função .filter() pra eliminar repetições de um array
export function filterUnique(value, index, arr) {
    return index === arr.indexOf(value);
}

//Função que é passada como callback da função .reduce() pra somar os valores de uma propriedade de vários objetos de um array.
//Utilizada pra somar o valor de várias despesas com o mesmo código e obter o valor total desse grupo de despesas, por ex.
export function sumByProperty(property) {
    return (acumulador, row) => acumulador + row[property];
}