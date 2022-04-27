//Esse arquivo define funções utilitárias que auxiliam na formatação dos códigos das despesas

//Retornar um código com a formatação desejada
export function getFormattedString(code) {
    let parts = getParts(code);
    return parts.join('.');
}

//Retornar um array com as 4 partes do código da despesa
export function getParts(code) {
    if (code instanceof Array) {
        return code;
    }
    if (typeof code === 'number') {
        code = code.toString();
    }
    if (typeof code === 'string') {
        code = code.replace(/[^0-9]/gi, '');
    }

    return [
        code.substring(0,2),
        code.substring(2,4),
        code.substring(4,6),
        code.substring(6,8)
    ]
}

//Retornar a string que representa o código "superior" desejado
//Por exemplo, o código superior ao código 33.90.14.14 é o 33.90.14.00, já o código superior do 33.90.14.00 é o 33.90.00.00
//Essa função é utilizada apenas para auxiliar a função getTopCode definida abaixo
export function getUpperCode(code) {
    let parts = getParts(code);
    let i;

    for (i = 0; i < parts.length; i++) {
        if (parts[i] === '00') break;
    }

    parts[i - 1] = '00';

    return getFormattedString(parts);
}

//Retorna o código "principal" de uma despesa
//Por exemplo, o código principal do código 33.90.14.14 é o 33.00.00.00
export function getTopCode(code) {
    do {
        code = getUpperCode(code);
    } while (getParts(code)[1] != '00')
    return code;
}

//Retorna o código no seu "terceiro nível"
//Por exemplo, o código de terceiro nível da despesa 33.90.14.14 é 33.90.14.00
//O código de terceiro nível da despesa 33.90.14.00 é ele mesmo.
export function getThirdCode(code) {
    let parts = getParts(code);
    parts[3] = '00';
    return getFormattedString(parts)
}