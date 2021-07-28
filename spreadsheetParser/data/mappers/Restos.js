import {filterUnique, sumByProperty} from "../utils/util";
import {getFormattedString, getThirdCode, getTopCode, getUpperCode} from "../utils/expenseCodeUtils";

export default function RestosMapper(rows) {
    rows.forEach(row => {
        row.Valor = parseFloat((row.Valor.replace(/[^0-9,]/gi, '').replace(',', '.')))
    });

    return rows
        .map(row => row.Codigo)
        .filter(filterUnique)
        .map(Codigo => ({
            Codigo: getFormattedString(Codigo),
            CodigoSuperior: getThirdCode(Codigo),
            CodigoPrincipal: getTopCode(Codigo),
            Rows: rows.filter(row => row.Codigo === Codigo),
            Total: rows.filter(row => row.Codigo === Codigo).reduce(sumByProperty('Valor'), 0)
        }));
}