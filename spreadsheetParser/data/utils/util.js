export function filterUnique(value, index, arr) {
    return index === arr.indexOf(value);
}

export function sumByProperty(property) {
    return (acumulador, row) => acumulador + row[property];
}