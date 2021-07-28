import {getFormattedString, getThirdCode, getTopCode } from "../utils/expenseCodeUtils";
import {filterUnique, sumByProperty} from "../utils/util";

export default function PagoMapper(rows) {
    rows.forEach(row => {
        row.Valor = parseFloat((row.Valor.replace(/[^0-9,]/gi, '').replace(',', '.')))
    });

    return rows;
}

export function AgruparPago(rows) {
    return rows
        .map(row => row.Codigo)
        .filter(filterUnique)
        .map(codigo => ({
            Codigo: getFormattedString(codigo),
            CodigoSuperior: getThirdCode(codigo),
            CodigoPrincipal: getTopCode(codigo),
            UO: rows.find(row => row.Codigo === codigo).UO,
            UG: rows.find(row => row.Codigo === codigo).UG,
            Rows: rows.filter(row => row.Codigo === codigo),
            Total: rows.filter(row => row.Codigo === codigo).reduce(sumByProperty('Valor'), 0)
        }));
}